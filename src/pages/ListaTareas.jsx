import "../components/common/Boton";
import Buscador from "../components/common/Buscador";
import "./listaTareas.css";
import GrupoRadioBotones from "../components/conjuntos/GrupoRadioBotones";
import { Link } from "react-router";

const ListaTareas = () => {
  const rutasNav = {
    todos: {
      value: "todos",
      label: "Todos",
      path: "/",
    },
    por_hacer: {
      value: "por_hacer",
      label: "Por hacer",
    },
    en_proceso: {
      value: "en_proceso",
      label: "En proceso",
    },
    finalizadas: {
      value: "finalizadas",
      label: "Finalizadas",
    },
  };

  return (
    <div>
      <br />
      <h1>Lista de tareas</h1>
      <br />
      <section className="contenedor-botones">
        <Link
          to={"tarea/agregar"}
          className="boton"
          style={{
            alignContent: "center",
            textAlign: "center",
            textDecoration: "none",
          }}
        >
          Agregar tarea
        </Link>
        <Buscador />
      </section>
      <GrupoRadioBotones rutas={rutasNav} name="tareas" />
    </div>
  );
};

export default ListaTareas;
