import { NavLink } from "react-router";
import RadioBoton from "../common/RadioBoton";
import "./grupoRadioBotones.css";

const GrupoRadioBotones = ({ rutas, name }) => {
  let navLinkActivo = ({ isActive }) =>
    `navlink-radio centrar-flex ${isActive ? "radio-label-checked" : ""}`;
  return (
    <div className="contenedor-radio">
      {Object.entries(rutas).map(([ruta, propiedadDelLabel], index) => {
        return (
          <NavLink
            to={propiedadDelLabel.path ? propiedadDelLabel.path : ruta}
            className={navLinkActivo}
            key={index}
          >
            <RadioBoton
              nameRadioBoton={name}
              value={propiedadDelLabel.value}
              label={propiedadDelLabel.label}
            />
          </NavLink>
        );
      })}
    </div>
  );
};

export default GrupoRadioBotones;
