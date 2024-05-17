import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Clase10() {
  const [data, setData] = useState();
  const [dataAxios, setDataAxios] = useState();
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetchData();
    fetchDataAxios();
  }, []);

  const fetchData = () => {
    setCargando(false);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error))
      .finally(() => setCargando(true));
  };

  const fetchDataAxios = () => {
    axios({ url: "https://jsonplaceholder.typicode.com/users" })
      .then((response) => {
        setDataAxios(response.data);
        console.log(response, "response");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Typography variant="h4">Datos con Fetch</Typography>
      {data?.slice(0, 5).map((dato) => (
        <>
          <Typography>{dato.userId}</Typography>
          <Typography variant="h6">{dato.title}</Typography>
          <Typography>{dato.body}</Typography>
        </>
      ))}
      <Typography variant="h4">Datos con Axios</Typography>
      {dataAxios?.map((dato) => (        <>
          <Typography>{dato.name}</Typography>
          <Typography>{dato.email}</Typography>
        </>
      ))}
    </>
  );
}
