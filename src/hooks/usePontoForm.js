import { useState, useEffect } from 'react';
import { FORM_VAZIO } from '../utils/constantes.js';
import { validarPonto } from '../utils/validacao.js';

// Gerencia os campos, a validação e o envio do formulário.
export function usePontoForm(pontoInicial, aoSalvar) {
  const [valores, setValores] = useState(FORM_VAZIO);
  const [erros, setErros] = useState({});

  // Preenche o formulário ao editar; limpa ao cadastrar
  useEffect(() => {
    setValores(pontoInicial?.id ? { ...FORM_VAZIO, ...pontoInicial } : FORM_VAZIO);
    setErros({});
  }, [pontoInicial]);

  function alterar(campo, valor) {
    setValores((atual) => ({ ...atual, [campo]: valor }));
    setErros((atual) => ({ ...atual, [campo]: undefined }));
  }

  function enviar(evento) {
    evento.preventDefault();
    const encontrados = validarPonto(valores);
    setErros(encontrados);
    if (Object.keys(encontrados).length > 0) return;
    const { id, createdAt, ...dados } = valores; // não reenvia campos do servidor
    aoSalvar({
      ...dados,
      nome: dados.nome.trim(),
      bairro: dados.bairro.trim(),
      endereco: dados.endereco.trim(),
      horario: dados.horario.trim(),
      observacoes: dados.observacoes.trim(),
    });
  }

  return { valores, erros, alterar, enviar };
}
