import "./App.css";
import "normalize.css";
import { Routes, Route } from "react-router";
import RootLayout from "./layouts/RootLayout";
import Home from "./routes/Home";

function App() {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />}>
            <Route
              index
              element={
                <>
                  <h2>todos</h2>
                </>
              }
            ></Route>
            <Route
              path="por-hacer"
              element={
                <>
                  <h2>Por hacer</h2>
                </>
              }
            ></Route>
            <Route
              path="en-proceso"
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
      </Routes>
    </>
  );
}

export default App;
