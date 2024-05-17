import React from "react";

export default function ComponenteA({ onEventoA }) {
  return (
    <button onClick={() => onEventoA("Hola desde componente A")}>
      Disparar Evento A
    </button>
  );
}
