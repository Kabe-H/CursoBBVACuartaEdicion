export default function LivingCodding(props) {
  return (
    <>
      {props.usuarios.map((usuario) => (
        <>
          <div style={{ border: "solid 2px black", margin: "10px" }}>
            <p>nombre: {usuario.nombre}</p>
            <p>edad: {usuario.edad}</p>
            <p>ubicacion: {usuario.ubicacion}</p>
          </div>
        </>
      ))}
    </>
  );
}
