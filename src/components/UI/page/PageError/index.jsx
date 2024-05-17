import { Typography } from "@mui/material";
import React from "react";

export default function PageError() {

  return (
    <>
      <Typography variant="h4">Error 404: Página no encontrada</Typography>
      <Typography>
        Los sentimos, la pagina que estas buscando no existe
      </Typography>
    </>
  );
}
