import React from "react";
import ComponenteA from "./ComponenteA";

export default function ComponenteB() {

  const handleEventoA = (mensaje) => {
    console.log(`Evento A manejado en el componente B: 
    ${mensaje}`);
  };
  
  return (
    <div>
      <h2>Componente B</h2>
      <ComponenteA onEventoA={handleEventoA}/>
    </div>
  );
}
