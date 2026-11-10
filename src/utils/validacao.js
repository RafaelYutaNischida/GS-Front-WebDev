// O MockAPI aceita qualquer dado, então a validação é responsabilidade do front-end.
export function validarPonto(v) {
  const erros = {};
  if (v.nome.trim().length < 3) erros.nome = 'Escreva o nome do local (mínimo 3 letras).';
  if (!v.tipo) erros.tipo = 'Escolha o tipo do ponto.';
  if (!v.bairro.trim()) erros.bairro = 'Informe o bairro.';
  if (!v.endereco.trim()) erros.endereco = 'Informe o endereço ou um ponto de referência.';
  if (v.observacoes.length > 200) erros.observacoes = 'Use no máximo 200 caracteres.';
  return erros;
}
