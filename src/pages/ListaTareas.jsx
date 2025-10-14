import Boton from "../components/common/Boton";
import Buscador from "../components/common/Buscador";
import "./listaTareas.css";
import GrupoRadioBotones from "../components/conjuntos/GrupoRadioBotones";

const ListaTareas = ({ agregar }) => {
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
        <Boton OnClick={agregar} tituloBoton="Agregar tarea" />
        <Buscador />
      </section>
      <GrupoRadioBotones rutas={rutasNav} name="tareas" />
    </div>
  );
};

export default ListaTareas;
