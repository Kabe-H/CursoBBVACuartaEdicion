import { useState } from "react";
import ComponenteB from "./ComponenteB";

export default function Clase4() {
  const [boton, setBoton] = useState(false);

  const handleClick = () => {
    console.log("Se hizo click");
    setBoton(!boton);
  };

  const onChangeInput = (event) => {

    console.log(event, "event");
    console.log(event.target, "event.target");
    console.log(event.target.value, "event.target.value");
  }

  return (
    <div>
      {boton && <p>Se hizo click</p>}
      <button onClick={handleClick}>Pulsar</button>
      <input type="text" onChange={onChangeInput}/>
      <ComponenteB/>
    </div>
  );
}

