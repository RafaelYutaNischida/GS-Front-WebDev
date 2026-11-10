import Botao from './Botao.jsx';

export default function EmptyState({ filtrado, aoLimpar, aoCadastrar }) {
  return (
    <div className="rounded-lg border-2 border-dashed border-linha bg-white p-8 text-center">
      <p className="text-lg font-bold">
        {filtrado ? 'Nenhum ponto com esses filtros' : 'Nenhum ponto cadastrado ainda'}
      </p>
      <p className="mt-1 text-suave">
        {filtrado
          ? 'Mude a busca ou limpe os filtros para ver todos.'
          : 'Cadastre o primeiro local com sombra, água ou descanso.'}
      </p>
      <div className="mt-4">
        {filtrado ? (
          <Botao variante="secundario" onClick={aoLimpar}>Limpar filtros</Botao>
        ) : (
          <Botao onClick={aoCadastrar}>Cadastrar ponto</Botao>
        )}
      </div>
    </div>
  );
}
