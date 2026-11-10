import Botao from './Botao.jsx';

export default function MensagemErro({ mensagem, aoTentarDeNovo }) {
  return (
    <div role="alert" className="rounded-lg border-2 border-calor bg-white p-4">
      <p className="font-bold text-calor">Algo deu errado</p>
      <p className="mt-1">{mensagem}</p>
      {aoTentarDeNovo && (
        <div className="mt-3">
          <Botao variante="secundario" onClick={aoTentarDeNovo}>Tentar de novo</Botao>
        </div>
      )}
    </div>
  );
}
