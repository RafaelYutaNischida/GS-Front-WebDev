import { useEffect } from 'react';
import Botao from './Botao.jsx';

export default function ConfirmModal({ titulo, texto, rotuloConfirmar, salvando, aoConfirmar, aoCancelar }) {
  // Fecha com a tecla Esc
  useEffect(() => {
    const aoTeclar = (e) => e.key === 'Escape' && aoCancelar();
    window.addEventListener('keydown', aoTeclar);
    return () => window.removeEventListener('keydown', aoTeclar);
  }, [aoCancelar]);

  return (
    <div className="fixed inset-0 z-10 flex items-end justify-center bg-tinta/70 p-4 sm:items-center">
      <div role="dialog" aria-modal="true" aria-labelledby="titulo-modal"
        className="w-full max-w-md rounded-xl bg-papel p-5">
        <h2 id="titulo-modal" className="text-xl font-bold">{titulo}</h2>
        <p className="mt-2">{texto}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Botao variante="perigo" onClick={aoConfirmar} desabilitado={salvando}>
            {salvando ? 'Excluindo...' : rotuloConfirmar}
          </Botao>
          <Botao variante="secundario" onClick={aoCancelar}>Cancelar</Botao>
        </div>
      </div>
    </div>
  );
}
