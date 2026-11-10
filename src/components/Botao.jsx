const VARIANTES = {
  primario: 'bg-terracota text-tinta hover:bg-[#c76143]',
  secundario: 'border-2 border-marinho bg-papel text-marinho hover:bg-fundo',
  perigo: 'bg-calor text-white hover:bg-[#84331f]',
};

export default function Botao({ variante = 'primario', tipo = 'button', desabilitado, children, ...resto }) {
  return (
    <button
      type={tipo}
      disabled={desabilitado}
      className={`min-h-12 rounded-lg px-5 py-2 font-bold transition-all duration-300 ease-in-out hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 ${VARIANTES[variante]}`}
      {...resto}
    >
      {children}
    </button>
  );
}
