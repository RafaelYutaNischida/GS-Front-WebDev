import PontoCard from './PontoCard.jsx';

export default function PontoList({ pontos, aoEditar, aoExcluir }) {
  return (
    <ul className="grid gap-4">
      {pontos.map((p) => (
        <li key={p.id}>
          <PontoCard ponto={p} aoEditar={aoEditar} aoExcluir={aoExcluir} />
        </li>
      ))}
    </ul>
  );
}
