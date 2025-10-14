import "./App.css";
import "normalize.css";
import { Routes, Route } from "react-router";
import RootLayout from "./layouts/RootLayout";
import Home from "./routes/Home";
import Tabla from "./components/conjuntos/Tabla";

function App() {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />}>
            <Route element={<Tabla />}>
              <Route
                index
                element={
                  <>
                    <h2>todos</h2>
                  </>
                }
              ></Route>
              <Route
                path="por_hacer"
                element={
                  <>
                    <h2>Por hacer</h2>
                  </>
                }
              ></Route>
              <Route
                path="en_proceso"
                element={
                  <>
                    <h2>En proceso</h2>
                  </>
                }
              ></Route>
              <Route
                path="finalizadas"
                element={
                  <>
                    <h2>Finalizadas</h2>
                  </>
                }
              ></Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
