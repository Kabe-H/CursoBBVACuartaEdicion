import React from "react";
import ProductCard from "./ProductCard";

export default function LivingCodding() {
  let nombre = "Celular";
  let precio = 500000;
  return (
    <div>
      <ProductCard nombre={nombre} precio={precio} />
    </div>
  );
}
