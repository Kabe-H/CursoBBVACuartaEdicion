import React, { useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";

export default function Clase13() {
  const { id } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    prueba(id)
  }, []);

  console.log(id, "id")
  const prueba = (id) =>{
    console.log("Este es el id: " + id);
  }
  return <div>
    <Button onClick={()=>navigate("muestra")}>Ir al Inicio</Button>
    <Outlet/>
  </div>;
}
