import { Link, useParams } from "react-router";
import { Outlet } from "react-router";
const Tarea = () => {
  const { accionTarea, id } = useParams();
  console.log(accionTarea, id);
  let tituloDeLaAccionTarea =
    accionTarea.slice(0, 1).toUpperCase() +
    accionTarea.substring(1) +
    "\ttarea";

  const estiloContenedor = { width: "100%" };
  const estiloEnlace = {
    display: "inline-block",
    textAlign: "center",
    alignContent: "center",
    textDecoration: "none",
  };

  return (
    <div style={estiloContenedor}>
      <Link to="/" className="boton" style={estiloEnlace}>
        Regresar
      </Link>

      <h1 style={{ padding: "2rem 0" }}>{tituloDeLaAccionTarea}</h1>
      <Outlet />
    </div>
  );
};

export default Tarea;
