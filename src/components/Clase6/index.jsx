import { useEffect, useState } from "react";

export default function Clase6() {
  const [contador, setContador] = useState(0);
  const [contador2, setContador2] = useState(0);
  const loquesea = "prueba"

  useEffect(() => {
    console.log("Componente clase6 Montado");
  }, []);

  useEffect(() => {
    console.log("El usuario hizo click en el contador1");
  }, [contador]);

  const sumar = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <h4>Contador: {contador}</h4>
      <button onClick={sumar}>Incrementar</button>
      <button onClick={() => setContador(contador - 1)}>Decrementar</button>
      <button onClick={() => setContador2(contador - 1)}>Decrementar2</button>
    </div>
  );
}
