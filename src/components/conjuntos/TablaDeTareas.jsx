import { useContext, useEffect } from "react";
import FilaTabla from "../common/FilaTabla";
import "./tablaDeTareas.css";
import { useParams } from "react-router";
import TareaContext from "../../context/TareasContext";

const estadosDeTareas = {
  por_hacer: "Por hacer",
  en_proceso: "En proceso",
  finalizadas: "Finalizada",
};

const TablaDeTareas = () => {
  const { tareasFiltradas, filtrarTareasPorEstado } = useContext(TareaContext);
  const { estado } = useParams();

  useEffect(() => {
    const estadoFiltrado = !estado ? "todos" : estadosDeTareas[estado];
    filtrarTareasPorEstado(estadoFiltrado);
  }, [estado]);

  return (
    <div className="contenedor-tareas">
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Título</th>
            <th>Descripción</th>
            <th>Estado</th>
            <th colSpan={3}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tareasFiltradas.map((tarea, index) => (
            <FilaTabla tarea={tarea} key={index} />
          ))}
        </tbody>
      </table>
      <h4>Paginado</h4>
    </div>
  );
};

export default TablaDeTareas;
