// Tipos de ponto de apoio. As classes ficam escritas por extenso
// para o Tailwind conseguir enxergá-las.
export const TIPOS = [
  { valor: 'sombra', rotulo: 'Sombra', classe: 'bg-marinho text-white' },
  { valor: 'agua', rotulo: 'Água', classe: 'bg-agua text-white' },
  { valor: 'descanso', rotulo: 'Descanso', classe: 'bg-tinta text-white' },
];

export function normalizarTipo(valor) {
  const chave = String(valor ?? '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .toLowerCase();
  return TIPOS.find((tipo) => tipo.valor === chave)?.valor ?? valor;
}

export function buscarTipo(valor) {
  const tipoNormalizado = normalizarTipo(valor);
  return TIPOS.find((tipo) => tipo.valor === tipoNormalizado)
    ?? { valor, rotulo: valor, classe: 'bg-suave text-white' };
}

export const FORM_VAZIO = {
  nome: '',
  tipo: 'sombra',
  bairro: '',
  endereco: '',
  horario: '',
  observacoes: '',
  aberto: true,
};
