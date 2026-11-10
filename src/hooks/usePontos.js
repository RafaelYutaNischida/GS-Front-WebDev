import { useState, useEffect, useCallback } from 'react';
import * as service from '../services/pontosService.js';

// Camada de LÓGICA DE NEGÓCIO: guarda a lista e expõe o CRUD para a tela.
export function usePontos() {
  const [pontos, setPontos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [salvando, setSalvando] = useState(false);
  const [erro, setErro] = useState(null);

  const carregar = useCallback(async () => {
    setCarregando(true);
    setErro(null);
    try {
      setPontos(await service.listar());
    } catch (e) {
      setErro(e.message);
    } finally {
      setCarregando(false);
    }
  }, []);

  // Busca a lista quando a tela abre
  useEffect(() => {
    carregar();
  }, [carregar]);

  // Executa uma ação de escrita tratando erro e o estado "salvando"
  async function executar(acao) {
    setSalvando(true);
    setErro(null);
    try {
      return await acao();
    } catch (e) {
      setErro(e.message);
      return null;
    } finally {
      setSalvando(false);
    }
  }

  async function criar(dados) {
    const novo = await executar(() => service.criar(dados));
    if (novo) setPontos((atual) => [novo, ...atual]);
    return Boolean(novo);
  }

  async function editar(id, dados) {
    const alterado = await executar(() => service.atualizar(id, dados));
    if (alterado) setPontos((atual) => atual.map((p) => (p.id === id ? alterado : p)));
    return Boolean(alterado);
  }

  async function excluir(id) {
    const removido = await executar(() => service.excluir(id));
    if (removido) setPontos((atual) => atual.filter((p) => p.id !== id));
    return Boolean(removido);
  }

  return { pontos, carregando, salvando, erro, recarregar: carregar, criar, editar, excluir };
}
