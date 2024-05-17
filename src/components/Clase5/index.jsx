import { useState } from "react";

export default function Clase5() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitted1, setSubmitted2] = useState(false);

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onClickRegistrar = () => {
    setSubmitted(!submitted);
    setSubmitted2(true);
  };

  console.log(name);
  console.log(email);

  return (
    <>
      <input type="text" value={name} onChange={onChangeName} />
      <input type="text" value={email} onChange={onChangeEmail} />
      <button onClick={onClickRegistrar}>
        {submitted ? "Eliminar usuario" : "Registrar"}
      </button>
      {submitted1 && (
        <>
          <p>{submitted ? "Se Registró" : "Se eliminó"}</p>
          <p>{name}</p>
          <p>{email}</p>
        </>
      )}
    </>
  );
}
