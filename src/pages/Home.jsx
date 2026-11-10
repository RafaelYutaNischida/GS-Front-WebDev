import { useState, useEffect } from 'react';
import { usePontos } from '../hooks/usePontos.js';
import { useFiltros } from '../hooks/useFiltros.js';
import Header from '../components/Header.jsx';
import Botao from '../components/Botao.jsx';
import AlertaCalor from '../components/AlertaCalor.jsx';
import FiltroBar from '../components/FiltroBar.jsx';
import PontoList from '../components/PontoList.jsx';
import PontoForm from '../components/PontoForm.jsx';
import Loading from '../components/Loading.jsx';
import MensagemErro from '../components/MensagemErro.jsx';
import EmptyState from '../components/EmptyState.jsx';
import ConfirmModal from '../components/ConfirmModal.jsx';

export default function Home() {
  const { pontos, carregando, salvando, erro, recarregar, criar, editar, excluir } = usePontos();
  const filtros = useFiltros(pontos);

  const [editando, setEditando] = useState(null); // null = fechado | {} = novo | ponto = edição
  const [excluindo, setExcluindo] = useState(null);
  const [aviso, setAviso] = useState('');

  // Some com o aviso de sucesso depois de 4 segundos
  useEffect(() => {
    if (!aviso) return;
    const t = setTimeout(() => setAviso(''), 4000);
    return () => clearTimeout(t);
  }, [aviso]);

  async function salvar(dados) {
    const eEdicao = Boolean(editando?.id);
    const ok = eEdicao ? await editar(editando.id, dados) : await criar(dados);
    if (ok) {
      setAviso(eEdicao ? 'Ponto atualizado.' : 'Ponto cadastrado.');
      setEditando(null);
    }
  }

  async function confirmarExclusao() {
    const ok = await excluir(excluindo.id);
    if (ok) setAviso('Ponto excluído.');
    setExcluindo(null);
  }

  return (
    <>
      <Header>
        <Botao variante="secundario" onClick={() => setEditando({})}>Cadastrar ponto</Botao>
      </Header>

      <main className="mx-auto grid max-w-3xl gap-6 px-4 py-6">
        <AlertaCalor aoVerAbertos={() => filtros.setApenasAbertos(true)} />

        {aviso && (
          <p role="status" className="rounded-lg bg-sombra p-3 font-bold text-white">{aviso}</p>
        )}

        {editando && (
          <PontoForm ponto={editando} salvando={salvando} aoSalvar={salvar} aoCancelar={() => setEditando(null)} />
        )}

        {erro && <MensagemErro mensagem={erro} aoTentarDeNovo={recarregar} />}

        <FiltroBar {...filtros} />

        {carregando ? (
          <Loading />
        ) : filtros.filtrados.length === 0 ? (
          !erro && (
            <EmptyState filtrado={filtros.filtrosAtivos} aoLimpar={filtros.limpar} aoCadastrar={() => setEditando({})} />
          )
        ) : (
          <>
            <p className="text-suave">
              {filtros.filtrados.length} {filtros.filtrados.length === 1 ? 'ponto encontrado' : 'pontos encontrados'}
            </p>
            <PontoList pontos={filtros.filtrados} aoEditar={setEditando} aoExcluir={setExcluindo} />
          </>
        )}
      </main>

      {excluindo && (
        <ConfirmModal
          titulo="Excluir este ponto?"
          texto={`“${excluindo.nome}” será removido da lista. Essa ação não pode ser desfeita.`}
          rotuloConfirmar="Sim, excluir"
          salvando={salvando}
          aoConfirmar={confirmarExclusao}
          aoCancelar={() => setExcluindo(null)}
        />
      )}
    </>
  );
}
