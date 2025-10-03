import "./App.css";
import "normalize.css";
import { Routes, Route } from "react-router";
import LayoutHome from "./layouts/LayoutHome";
import Lista_tareas from "./pages/Lista_tareas";

function App() {
  return (
    <>
      <Routes>
        <Route element={<LayoutHome />}>
          <Route index element={<Lista_tareas />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
