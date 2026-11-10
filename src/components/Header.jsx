export default function Header({ children }) {
  return (
    <header className="bg-marinho text-white">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-serif text-2xl font-bold text-white sm:text-3xl">Pontos de apoio contra o calor</h1>
          <p className="mt-2 text-white/90">
            Sombra, água e descanso para quem trabalha na rua. Região da Paulista, São Paulo.
          </p>
        </div>
        {children}
      </div>
    </header>
  );
}
