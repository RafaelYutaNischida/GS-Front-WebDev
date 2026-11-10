import { useState, useMemo } from 'react';

// Filtra a lista por tipo, texto (nome ou bairro) e "aberto agora".
export function useFiltros(pontos) {
  const [tipo, setTipo] = useState('todos');
  const [busca, setBusca] = useState('');
  const [apenasAbertos, setApenasAbertos] = useState(false);

  const filtrados = useMemo(() => {
    const termo = busca.trim().toLowerCase();
    return pontos.filter((p) => {
      if (tipo !== 'todos' && p.tipo !== tipo) return false;
      if (apenasAbertos && !p.aberto) return false;
      if (termo && !`${p.nome} ${p.bairro}`.toLowerCase().includes(termo)) return false;
      return true;
    });
  }, [pontos, tipo, busca, apenasAbertos]);

  const filtrosAtivos = tipo !== 'todos' || busca.trim() !== '' || apenasAbertos;

  function limpar() {
    setTipo('todos');
    setBusca('');
    setApenasAbertos(false);
  }

  return { tipo, setTipo, busca, setBusca, apenasAbertos, setApenasAbertos, filtrados, filtrosAtivos, limpar };
}
