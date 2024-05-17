import React, { useRef, useState } from "react";

export default function LivingCoddigRef() {
  const [contador, setContador] = useState(0);
  const [prueba, setPrueba] = useState(true);
  const counterRef = useRef(0);

  const reiniciar = () => {
    counterRef.current = 0;
    setContador(counterRef.current);
  };
  const incrementar = () => {
    counterRef.current += 1;
    //setContador(contador+1)
  };
  const cambiarPrueba = () => {
    setPrueba(!prueba);
  };

  {console.log(counterRef.current)}
  return (
    <>
      <p>contador: {contador}</p>
      <p>counterRef: {counterRef.current}</p>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={reiniciar}>Reiniciar</button>
      <button onClick={cambiarPrueba}>Prueba</button>
    </>
  );
}
