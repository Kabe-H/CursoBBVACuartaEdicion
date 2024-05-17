import { Route, Routes } from "react-router-dom";
import "./App.css";
import Clase10 from "./components/Clase10";
import Clase11 from "./components/Clase11";
import Clase12 from "./components/Clase12";
import Clase13 from "./components/Clase13";
import Clase2 from "./components/Clase2";
import Clase3 from "./components/Clase3";
import Clase4 from "./components/Clase4";
import Clase5 from "./components/Clase5";
import Clase6 from "./components/Clase6";
import Clase7 from "./components/Clase7";
import Page from "./components/UI/page";
import PageError from "./components/UI/page/PageError";
import Clase1 from "./components/clase1";
import Clase8 from "./components/clase8";
import Muestra from "./components/Clase13/Muestra";
import Clase14 from "./components/Clase14";
import Inicio from "./components/UI/Inicio";

function App() {
  const rutas = [
    {
      path: "/Clase2",
      element: <Clase2 />,
    },
  ];

  return (
    <Page>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Clase1" element={<Clase1 />} />
        <Route path="/Clase2" element={<Clase2 />} />
        <Route path="/Clase3" element={<Clase3 />} />
        <Route path="/Clase4" element={<Clase4 />} />
        <Route path="/Clase5" element={<Clase5 />} />
        <Route path="/Clase6" element={<Clase6 />} />
        <Route path="/Clase7" element={<Clase7 />} />
        <Route path="/Clase8" element={<Clase8 />} />
        <Route path="/Clase10" element={<Clase10 />} />
        <Route path="/Clase11" element={<Clase11 />} />
        <Route path="/Clase12" element={<Clase12 />} />
        <Route path="/Clase13/:id" element={<Clase13 />}>
          <Route path="muestra" element={<Muestra />} />
        </Route>
        <Route path="/Clase14" element={<Clase14 />} />
        <Route path="*" element={<PageError to="/404" replace />} />
      </Routes>
    </Page>
  );
}

export default App;
