import React from "react";

export default function HijoClase3(props) {
    console.log(props, "props")
  return <div style={{color:"blue"}}>{props.frase}</div>;
}
