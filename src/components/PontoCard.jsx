import { buscarTipo } from '../utils/constantes.js';
import Botao from './Botao.jsx';

export default function PontoCard({ ponto, aoEditar, aoExcluir }) {
  const tipo = buscarTipo(ponto.tipo);
  return (
    <article className="rounded-xl border border-linha bg-papel p-4 shadow-sm">
      <div className="flex flex-wrap items-center gap-2">
        <span className={`rounded-md px-2 py-1 text-sm font-bold ${tipo.classe}`}>{tipo.rotulo}</span>
        {/* O estado usa texto e símbolo, não só cor */}
        <span className={`text-sm font-bold ${ponto.aberto ? 'text-sombra' : 'text-calor'}`}>
          {ponto.aberto ? '● Aberto agora' : '○ Fechado'}
        </span>
      </div>
      <h3 className="mt-2 text-xl font-bold">{ponto.nome}</h3>
      <p className="text-suave">{ponto.endereco} · {ponto.bairro}</p>
      {ponto.horario && <p className="mt-1">Horário: {ponto.horario}</p>}
      {ponto.observacoes && <p className="mt-1">{ponto.observacoes}</p>}
      <div className="mt-4 flex flex-wrap gap-2">
        <Botao variante="secundario" onClick={() => aoEditar(ponto)} aria-label={`Editar ${ponto.nome}`}>Editar</Botao>
        <Botao variante="perigo" onClick={() => aoExcluir(ponto)} aria-label={`Excluir ${ponto.nome}`}>Excluir</Botao>
      </div>
    </article>
  );
}
