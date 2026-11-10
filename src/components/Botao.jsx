const VARIANTES = {
  primario: 'bg-sombra text-white hover:bg-teal-900',
  secundario: 'bg-papel text-tinta border-2 border-tinta hover:bg-fundo',
  perigo: 'bg-calor text-white hover:bg-red-900',
};

export default function Botao({ variante = 'primario', tipo = 'button', desabilitado, children, ...resto }) {
  return (
    <button
      type={tipo}
      disabled={desabilitado}
      className={`min-h-12 rounded-lg px-5 py-2 font-bold transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${VARIANTES[variante]}`}
      {...resto}
    >
      {children}
    </button>
  );
}
