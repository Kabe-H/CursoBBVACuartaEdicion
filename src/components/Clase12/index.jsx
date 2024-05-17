import React from "react";
import ReactArrayKeys from "./ReactArrayKeys";

export default function Clase12() {
  const data = [
    { id: 5, name: "Joan" },
    { id: 2, name: "Federico" },
    { id: 3, name: "Micaela" },
    { id: 4, name: "Maxi" },
  ];
  return (
    <div>
      <ReactArrayKeys data={data} />
    </div>
  );
}
