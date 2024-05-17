import ToDoList from "./TodoList";

export default function Clase1(props) {
  let nombre = "Lucas";

  nombre = "Cecilia";

  const estilo = {
    color: "red",
  };

  const isActive = true;
  console.log(props.prueba, "esta props esta en clase 1 y viene de clase3")
  return (
    <div>
      <p className={isActive && "active"} style={estilo}>
        {nombre}
      </p>
      <ToDoList />
    </div>
  );
}
