import { useState } from 'react';
import { classificarCalor } from '../utils/calor.js';
import Botao from './Botao.jsx';

// Funcionalidade ligada ao tema: o usuário informa a temperatura e recebe
// o nível de risco e uma orientação. No futuro, o valor pode vir do sensor ESP32.
export default function AlertaCalor({ aoVerAbertos }) {
  const [temp, setTemp] = useState(30);
  const alerta = classificarCalor(temp);

  return (
    <section aria-labelledby="titulo-alerta" className="rounded-xl bg-papel p-4 shadow-sm">
      <h2 id="titulo-alerta" className="text-lg font-bold">Como está o calor agora?</h2>
      <label htmlFor="temp" className="mt-3 block font-bold">
        Temperatura: {temp} °C
      </label>
      <input
        id="temp"
        type="range"
        min="20"
        max="45"
        value={temp}
        onChange={(e) => setTemp(Number(e.target.value))}
        className="mt-1 h-8 w-full accent-sombra"
      />
      <div role="status" className={`mt-3 rounded-lg p-4 ${alerta.classe}`}>
        <p className="font-bold">{alerta.titulo}</p>
        <p>{alerta.dica}</p>
      </div>
      {alerta.nivel !== 'normal' && (
        <div className="mt-3">
          <Botao variante="secundario" onClick={aoVerAbertos}>Ver pontos abertos agora</Botao>
        </div>
      )}
    </section>
  );
}
