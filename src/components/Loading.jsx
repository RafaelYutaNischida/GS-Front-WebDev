export default function Loading({ texto = 'Carregando pontos de apoio...' }) {
  return (
    <div role="status" className="flex items-center gap-3 py-10 text-suave">
      <span className="h-6 w-6 animate-spin rounded-full border-4 border-linha border-t-sombra motion-reduce:animate-none" />
      <span>{texto}</span>
    </div>
  );
}
