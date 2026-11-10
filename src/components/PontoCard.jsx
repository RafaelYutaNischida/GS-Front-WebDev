import { buscarTipo } from '../utils/constantes.js';
import Botao from './Botao.jsx';

export default function PontoCard({ ponto, aoEditar, aoExcluir }) {
  const tipo = buscarTipo(ponto.tipo);
  const semId = ponto.id == null || ponto.id === '';
  return (
    <article className="rounded-xl border border-linha bg-papel p-5 shadow-sm transition-shadow duration-300 hover:shadow-md">
      <div className="flex flex-wrap items-center gap-2">
        <span className={`rounded-md px-2 py-1 text-sm font-bold ${tipo.classe}`}>{tipo.rotulo}</span>
        {/* O estado usa texto e símbolo, não só cor */}
        <span className={`text-sm font-bold ${ponto.aberto ? 'text-sombra' : 'text-calor'}`}>
          {ponto.aberto ? '● Aberto agora' : '○ Fechado'}
        </span>
      </div>
      <h3 className="mt-3 text-xl font-bold">{ponto.nome}</h3>
      <p className="text-suave">{ponto.endereco} · {ponto.bairro}</p>
      {ponto.horario && <p className="mt-1">Horário: {ponto.horario}</p>}
      {ponto.observacoes && <p className="mt-1">{ponto.observacoes}</p>}
      {semId && (
        <p className="mt-3 text-sm text-suave">
          Este registro não tem ID na API. Remova-o no painel da API e cadastre-o novamente para editar ou excluir pelo site.
        </p>
      )}
      <div className="mt-4 flex flex-wrap gap-2">
        <Botao variante="secundario" desabilitado={semId} onClick={() => aoEditar(ponto)} aria-label={`Editar ${ponto.nome}`}>Editar</Botao>
        <Botao variante="perigo" desabilitado={semId} onClick={() => aoExcluir(ponto)} aria-label={`Excluir ${ponto.nome}`}>Excluir</Botao>
      </div>
    </article>
  );
}
