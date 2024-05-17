import { Grid } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Grid container sx={{backgroundColor:"#fafa00"}}>
      <Grid item xs={2}>
        Derechos de autor: Pablo Mathias Heredia.
      </Grid>
      <Grid item xs={1}>
        2024
      </Grid>
      <Grid item xs={9}>
        Mi Aplicaion
      </Grid>
    </Grid>
  );
}
