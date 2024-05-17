import { createContext, useState } from "react";
import HuseContext from "./HuseContext";
import GeneralTarea from "./LivingCodding/GeneralTarea";
import LivingCoddigRef from "./Ref/LivingCoddingRef";
import AccesoDOM from "./Ref/AccesoDOM";

export const userContext = createContext();

export default function Clase7() {
  const [user, setUser] = useState(null);

  const cerrarSesion = () => {
    if (user) {
      setUser(null);
    } else {
      setUser({
        miUsuario: { name: "Pedro", mail: "mail@mail.com" },
        listaUsuario: [],
      });
    }
  };

  return (
    <>
      <userContext.Provider value={user}>
        <button onClick={cerrarSesion}>
          {user ? "Cerrar Sesion" : "Iniciar Sesion"}
        </button>
        <div>
          <HuseContext />
        </div>
      </userContext.Provider>
      <GeneralTarea />
      {/* REF */}
      <LivingCoddigRef />
      <AccesoDOM />
    </>
  );
}
