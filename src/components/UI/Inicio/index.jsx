import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Inicio() {
  const navigate = useNavigate();

  const interfaceButton = [
    {
      name: "Clase 1",
      navigate: "/Clase1",
    },
    {
      name: "Clase 2",
      navigate: "/Clase2",
    },
    {
      name: "Clase 3",
      navigate: "/Clase3",
    },
    {
      name: "Clase 3",
      navigate: "/Clase3",
    },
    {
      name: "Clase 4",
      navigate: "/Clase4",
    },
    {
      name: "Clase 5",
      navigate: "/Clase5",
    },
    {
      name: "Clase 6",
      navigate: "/Clase6",
    },
    {
      name: "Clase 7",
      navigate: "/Clase7",
    },
    {
      name: "Clase 8",
      navigate: "/Clase8",
    },
    {
      name: "Clase 10",
      navigate: "/Clase10",
    },
    {
      name: "Clase 11",
      navigate: "/Clase11",
    },
    {
      name: "Clase 12",
      navigate: "/Clase12",
    },
    {
      name: "Clase 13",
      navigate: "/Clase13",
    },
    {
      name: "Clase 14",
      navigate: "/Clase14",
    },
  ];
  return (
    <Grid container spacing={2} sx={{ marginTop: "1.8vh" }}>
      {interfaceButton?.map((data) => (
        <Grid item xs={4}>
          <Button variant="contained" onClick={() => navigate(data.navigate)}>
            {data.name}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
}
