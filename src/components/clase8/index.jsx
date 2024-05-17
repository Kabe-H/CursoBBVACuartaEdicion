import React from "react";
import LivingCodding from "./LivingCodding";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";

export default function Clase8() {
  const user = useSelector((state) => state.user);
  const usuarios = [
    { nombre: "Federico", edad: 29, ubicacion: "Devoto" },
    { nombre: "Jana", edad: 25, ubicacion: "Villa Crespo" },
    { nombre: "Alan", edad: 24, ubicacion: "Belgrano" },
    { nombre: "Martina", edad: 21, ubicacion: "Lanus" },
  ];
  return (
    <div>
      <Typography variant="h1">{user.nombre}</Typography>
      {/* <LivingCodding usuarios={usuarios} /> */}
    </div>
  );
}
