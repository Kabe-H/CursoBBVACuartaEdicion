import React from "react";
import { useSelector } from "react-redux";

export default function ComponenteInicial() {
  const user = useSelector((state) => state.user);
  return <div>{user.nombre}</div>;
}
