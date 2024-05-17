import { TextField, Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";

export default function EjemploPost() {
  // Para que la request de 200 usar:
  //                                  "email": "eve.holt@reqres.in",
  //                                  "password": "cityslicka"
  
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const enviarPost = async () => {
    let objetoParaElBack = {
      user: email,
      job: password,
    };
    await axios
      .post("https://reqres.in/api/users", objetoParaElBack)
      .then((response) => console.log(response, "response"))
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <TextField
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        label="email"
      />
      <TextField
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        label="password"
      />
      <Button onClick={enviarPost}>BOTON</Button>
    </div>
  );
}
