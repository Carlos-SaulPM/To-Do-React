import "./App.css";
import "normalize.css";
import { Routes, Route } from "react-router";
import RootLayout from "./layouts/RootLayout";
import Home from "./routes/Home";
import TablaDeTareas from "./components/conjuntos/TablaDeTareas";

function App() {
  let tablaTareas = <TablaDeTareas />; //Utilizando la misma referencia para las subrutas "/".
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />}>
            <Route index element={tablaTareas} />
            <Route path=":estado" element={tablaTareas} />
          </Route>
          <Route
            path="/agregar"
            element={
              <>
                <h3>Agregando tarea</h3>
              </>
            }
          ></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
