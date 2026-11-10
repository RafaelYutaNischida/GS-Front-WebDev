// Camada de ACESSO AOS DADOS: só este arquivo conversa com a API.
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

export const listar = () => requisicao();
export const criar = (dados) => requisicao('', { method: 'POST', body: JSON.stringify(dados) });
export const atualizar = (id, dados) =>
  requisicao(`/${id}`, { method: 'PUT', body: JSON.stringify(dados) });
export const excluir = (id) => requisicao(`/${id}`, { method: 'DELETE' });
