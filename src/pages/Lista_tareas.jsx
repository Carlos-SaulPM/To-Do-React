import Boton from "../components/common/Boton";
import RadioBoton from "../components/common/RadioBoton";
import Buscador from "../components/common/Buscador";
import "./lista_tareas.css";
import { NavLink } from "react-router";

const Lista_tareas = ({ agregar }) => {
  let navLinkActivo = ({ isActive }) =>
    `navlink-radio centrar-flex ${isActive ? "radio-label-checked" : ""}`;

  return (
    <div>
      <h1>Lista de tareas</h1>
      <br />
      <section className="contenedor-botones">
        <Boton OnClick={agregar} tituloBoton="Agregar tarea" />
        <br />
        <br />
        <div className="contenedor-radio">
          <NavLink to="/" className={navLinkActivo}>
            <RadioBoton nameRadioBoton="tareas" value="todos" label="Todos" />
          </NavLink>
          <NavLink to="por-hacer" className={navLinkActivo}>
            <RadioBoton
              nameRadioBoton="tareas"
              value="por_hacer"
              label="Por hacer"
            />
          </NavLink>
          <NavLink to="en-proceso" className={navLinkActivo}>
            <RadioBoton
              nameRadioBoton="tareas"
              value="en_proceso"
              label="En proceso"
            />
          </NavLink>
          <NavLink to="finalizadas" className={navLinkActivo}>
            <RadioBoton
              nameRadioBoton="tareas"
              value="finalizadas"
              label="Finalizadas"
            />
          </NavLink>
        </div>
        <br />
        <br />
        <Buscador />
      </section>
    </div>
  );
};

export default Lista_tareas;
