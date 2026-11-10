// Tipos de ponto de apoio. As classes ficam escritas por extenso
// para o Tailwind conseguir enxergá-las.
export const TIPOS = [
  { valor: 'sombra', rotulo: 'Sombra', classe: 'bg-sombra text-white' },
  { valor: 'agua', rotulo: 'Água', classe: 'bg-agua text-white' },
  { valor: 'descanso', rotulo: 'Descanso', classe: 'bg-tinta text-white' },
];

export function buscarTipo(valor) {
  return TIPOS.find((t) => t.valor === valor) ?? { valor, rotulo: valor, classe: 'bg-suave text-white' };
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
