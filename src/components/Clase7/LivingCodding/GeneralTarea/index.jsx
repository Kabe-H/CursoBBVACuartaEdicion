import { createContext, useMemo } from "react";
import ListaTarea from "../ListaTarea";
import ContadorTarea from "../ContadorTarea";

export const contextoListaTarea = createContext();

export default function GeneralTarea() {
  const tareas = useMemo(() => [
    { id: 1, tarea: "Practicar React" },
    { id: 2, tarea: "Estudiar" },
    { id: 3, tarea: "Leer el teorico" },
  ]);
  return (
    <contextoListaTarea.Provider value={tareas}>
      <ListaTarea />
      <ContadorTarea />
    </contextoListaTarea.Provider>
  );
}
