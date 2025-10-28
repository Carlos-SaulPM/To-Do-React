import { Outlet } from "react-router";
import { TareaProvider } from "../context/TareasContext";

const RootLayout = () => {
  return (
    <>
      <header>
        <h2>Esto es un header</h2>
      </header>
      <main>
        <TareaProvider>
          <Outlet />
        </TareaProvider>
      </main>
      <footer>
        <h4>Esto es un footer</h4>
      </footer>
    </>
  );
};

export default RootLayout;
