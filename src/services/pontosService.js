// Camada de ACESSO AOS DADOS: só este arquivo conversa com a API.
import { normalizarTipo } from '../utils/constantes.js';

const BASE = import.meta.env.VITE_API_URL;

async function requisicao(caminho = '', opcoes = {}) {
  if (!BASE) {
    throw new Error('Endereço da API não configurado. Defina VITE_API_URL no arquivo .env.');
  }
  let resposta;
  try {
    resposta = await fetch(`${BASE}/pontos${caminho}`, {
      headers: { 'Content-Type': 'application/json' },
      ...opcoes,
    });
  } catch {
    throw new Error('Sem conexão com o servidor. Confira sua internet e tente de novo.');
  }
  if (!resposta.ok) {
    throw new Error(`Não foi possível concluir a ação (erro ${resposta.status}).`);
  }
  return resposta.json();
}

function normalizarPonto(ponto) {
  const enderecoCompleto = ponto.endereco ?? '';
  const separadorBairro = enderecoCompleto.lastIndexOf(' - ');
  const temBairroNoEndereco = separadorBairro !== -1 && !ponto.bairro;

  return {
    ...ponto,
    tipo: normalizarTipo(ponto.tipo),
    endereco: temBairroNoEndereco ? enderecoCompleto.slice(0, separadorBairro) : enderecoCompleto,
    bairro: ponto.bairro ?? (temBairroNoEndereco ? enderecoCompleto.slice(separadorBairro + 3) : ''),
    horario: ponto.horario ?? '',
    observacoes: ponto.observacoes ?? ponto.descricao ?? '',
    aberto: ponto.aberto ?? ponto.ativo ?? false,
  };
}

export const listar = async () => (await requisicao()).map(normalizarPonto);
export const criar = (dados) => requisicao('', { method: 'POST', body: JSON.stringify(dados) });
export const atualizar = (id, dados) =>
  requisicao(`/${id}`, { method: 'PUT', body: JSON.stringify(dados) });
export const excluir = (id) => requisicao(`/${id}`, { method: 'DELETE' });