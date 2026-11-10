import { usePontoForm } from '../hooks/usePontoForm.js';
import { TIPOS } from '../utils/constantes.js';
import Botao from './Botao.jsx';

function Campo({ id, rotulo, erro, children }) {
  return (
    <div>
      <label htmlFor={id} className="block font-bold">{rotulo}</label>
      {children}
      {erro && <p id={`${id}-erro`} className="mt-1 font-bold text-calor">{erro}</p>}
    </div>
  );
}

export default function PontoForm({ ponto, salvando, aoSalvar, aoCancelar }) {
  const { valores, erros, alterar, enviar } = usePontoForm(ponto, aoSalvar);
  const editando = Boolean(ponto?.id);
  const entrada = 'min-h-12 w-full rounded-lg border-2 border-linha bg-white px-3';

  return (
    <form onSubmit={enviar} noValidate className="grid gap-4 rounded-xl bg-papel p-4 shadow-sm">
      <h2 className="text-xl font-bold">{editando ? 'Editar ponto' : 'Cadastrar ponto'}</h2>

      <Campo id="nome" rotulo="Nome do local" erro={erros.nome}>
        <input id="nome" value={valores.nome} onChange={(e) => alterar('nome', e.target.value)}
          aria-invalid={Boolean(erros.nome)} aria-describedby={erros.nome ? 'nome-erro' : undefined}
          placeholder="Ex.: Bebedouro da praça" className={entrada} />
      </Campo>

      <Campo id="tipo" rotulo="Tipo" erro={erros.tipo}>
        <select id="tipo" value={valores.tipo} onChange={(e) => alterar('tipo', e.target.value)} className={entrada}>
          {TIPOS.map((t) => (
            <option key={t.valor} value={t.valor}>{t.rotulo}</option>
          ))}
        </select>
      </Campo>

      <Campo id="bairro" rotulo="Bairro" erro={erros.bairro}>
        <input id="bairro" value={valores.bairro} onChange={(e) => alterar('bairro', e.target.value)}
          aria-invalid={Boolean(erros.bairro)} aria-describedby={erros.bairro ? 'bairro-erro' : undefined}
          className={entrada} />
      </Campo>

      <Campo id="endereco" rotulo="Endereço ou referência" erro={erros.endereco}>
        <input id="endereco" value={valores.endereco} onChange={(e) => alterar('endereco', e.target.value)}
          aria-invalid={Boolean(erros.endereco)} aria-describedby={erros.endereco ? 'endereco-erro' : undefined}
          className={entrada} />
      </Campo>

      <Campo id="horario" rotulo="Horário de funcionamento (opcional)">
        <input id="horario" value={valores.horario} onChange={(e) => alterar('horario', e.target.value)}
          placeholder="Ex.: 7h às 19h" className={entrada} />
      </Campo>

      <Campo id="observacoes" rotulo="Observações (opcional)" erro={erros.observacoes}>
        <textarea id="observacoes" rows="3" value={valores.observacoes}
          onChange={(e) => alterar('observacoes', e.target.value)}
          aria-describedby={erros.observacoes ? 'observacoes-erro' : undefined}
          className={`${entrada} py-2`} />
      </Campo>

      <label className="flex min-h-12 items-center gap-3 font-bold">
        <input type="checkbox" checked={valores.aberto} onChange={(e) => alterar('aberto', e.target.checked)}
          className="h-6 w-6 accent-sombra" />
        Está aberto agora
      </label>

      <div className="flex flex-wrap gap-2">
        <Botao tipo="submit" desabilitado={salvando}>
          {salvando ? 'Salvando...' : editando ? 'Salvar alterações' : 'Cadastrar ponto'}
        </Botao>
        <Botao variante="secundario" onClick={aoCancelar}>Cancelar</Botao>
      </div>
    </form>
  );
}
