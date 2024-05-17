import { useContext } from "react";
import { contextoListaTarea } from "../GeneralTarea";

export default function ListaTarea() {
  const tareas = useContext(contextoListaTarea);

  return (
    <>
      {tareas?.map((tarea) => (
        <ul key={tarea.id}>
          <li>{tarea.tarea}</li>
        </ul>
      ))}
    </>
  );
}
