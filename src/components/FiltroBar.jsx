import { TIPOS } from '../utils/constantes.js';

export default function FiltroBar({ tipo, setTipo, busca, setBusca, apenasAbertos, setApenasAbertos }) {
  const campo = 'min-h-12 w-full rounded-lg border-2 border-linha bg-white px-3';
  return (
    <section aria-label="Filtros" className="grid gap-3 sm:grid-cols-2">
      <div>
        <label htmlFor="busca" className="block font-bold">Buscar por nome ou bairro</label>
        <input id="busca" type="search" value={busca} onChange={(e) => setBusca(e.target.value)}
          placeholder="Ex.: Bela Vista" className={campo} />
      </div>
      <div>
        <label htmlFor="filtro-tipo" className="block font-bold">Tipo de ponto</label>
        <select id="filtro-tipo" value={tipo} onChange={(e) => setTipo(e.target.value)} className={campo}>
          <option value="todos">Todos</option>
          {TIPOS.map((t) => (
            <option key={t.valor} value={t.valor}>{t.rotulo}</option>
          ))}
        </select>
      </div>
      <label className="flex min-h-12 items-center gap-3 font-bold sm:col-span-2">
        <input type="checkbox" checked={apenasAbertos} onChange={(e) => setApenasAbertos(e.target.checked)}
          className="h-6 w-6 accent-sombra" />
        Mostrar só os abertos agora
      </label>
    </section>
  );
}
