// Faixas de temperatura usadas pelo alerta. São valores ILUSTRATIVOS do projeto,
// não uma norma oficial: ajuste e justifique no README.
export function classificarCalor(temp) {
  if (temp >= 35) {
    return {
      nivel: 'perigo',
      titulo: 'Perigo: calor muito forte',
      dica: 'Evite o sol. Procure sombra e água agora e descanse a cada 30 minutos.',
      classe: 'bg-calor text-white',
    };
  }
  if (temp >= 30) {
    return {
      nivel: 'atencao',
      titulo: 'Atenção: está esquentando',
      dica: 'Beba água com frequência e prefira trajetos com sombra.',
      classe: 'bg-amber-300 text-tinta',
    };
  }
  return {
    nivel: 'normal',
    titulo: 'Calor sob controle',
    dica: 'Mesmo assim, leve uma garrafa de água.',
    classe: 'bg-sombra text-white',
  };
}
