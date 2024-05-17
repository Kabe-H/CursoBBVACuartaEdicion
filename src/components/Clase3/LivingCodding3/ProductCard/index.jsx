import React from "react";

export default function ProductCard(props) {
  const { precio = 0, nombre = "" } = props;
  return (
    <div style={{ border: "1px solid white" }}>
      <p>
        <b>{nombre}</b>
      </p>
      <p>$ {precio}</p>
    </div>
  );
}
