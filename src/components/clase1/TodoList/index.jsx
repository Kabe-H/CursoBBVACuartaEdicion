export default function ToDoList() {
  let lista = ["Limpiar la casa", "Cocinar el almuerzo", "Programar en React"];

  const estilos = {
    textDecoration: "line-through",
  };

  return (
    <div>
      {lista.map((elementoLista) => (
        <p
          key={elementoLista}
          style={elementoLista === "Limpiar la casa" ? estilos : null}
        >
          {elementoLista}
        </p>
      ))}
      {/* <p style={estilos}>{lista[0]}</p>
      <p>{lista[1]}</p>
      <p>{lista[2]}</p> */}
    </div>
  );
}
