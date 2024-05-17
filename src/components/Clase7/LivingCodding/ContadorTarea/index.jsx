import { useContext } from "react";
import { contextoListaTarea } from "../GeneralTarea";

export default function ContadorTarea() {
  const tareas = useContext(contextoListaTarea);
  return <div>La cantidad de tareas es: {tareas.length}</div>;
}
