import { Button, TextField, Typography } from "@mui/material";
import {useState} from "react";
import { useSelector, useDispatch } from "react-redux";

import ComponenteInicial from "./ComponenteIndependiente";
import { setUser } from "../../Redux/slice/userSlice";
import { useNavigate } from "react-router-dom";
import { setCounter } from "../../Redux/slice/countSlice";

export default function Clase14() {
  const [nombre, setNombre] = useState();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(setUser({ ...user, nombre: nombre }));
    navigate("/Clase8");
  };

  const onClick2 = () => {
    dispatch(setCounter(count.count + 1));
  }

  console.log(count)
  console.log(user)

  return (
    <>
      <TextField
        label="nombre"
        value={nombre}
        onChange={(e) => {
          setNombre(e.target.value);
        }}
      />
      <Typography>{count.count}</Typography> 
      <Button onClick={onClick}>IR</Button>
      <Button onClick={onClick2}>Sumar</Button>
      <ComponenteInicial />
    </>
  );
}
