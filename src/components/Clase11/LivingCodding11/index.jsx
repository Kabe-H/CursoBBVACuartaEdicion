import { Grid, TextField, Button, Typography } from "@mui/material";
import { useState } from "react";

export default function LivingCodding11() {
  const [user, setUser] = useState({
    nombre: "",
    email: "",
  });
  const [formulario, setFormulario] = useState("");

  const enviarFormulario = () => {
    if (user.nombre && user.email) {
      setFormulario("Fue enviado con exito");
    }
  };

  return (
    <Grid container>
      {formulario ? (
        <Typography>{formulario}</Typography>
      ) : (
        <>
          <Grid item xs={12}>
            <TextField
              label="nombre"
              onChange={(e) => {
                setUser({ ...user, nombre: e.target.value });
              }}
              value={user.nombre}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="email"
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
              value={user.email}
            />
          </Grid>
          <Grid item xs={12}>
            <Button onClick={enviarFormulario}>Enviar Formulario</Button>
          </Grid>
        </>
      )}
    </Grid>
  );
}
