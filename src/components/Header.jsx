export default function Header({ children }) {
  return (
    <header className="bg-tinta text-white">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold sm:text-3xl">Pontos de apoio contra o calor</h1>
          <p className="mt-1 text-teal-100">
            Sombra, água e descanso para quem trabalha na rua. Região da Paulista, São Paulo.
          </p>
        </div>
        {children}
      </div>
    </header>
  );
}
