import { useEffect } from "react";
import FilaTabla from "../common/FilaTabla";
import "./tablaDeTareas.css";
import { useTareas } from "../../hooks/useTareas";
import { useParams } from "react-router";

const estadosDeTareas = {
  por_hacer: "Por hacer",
  en_proceso: "En proceso",
  finalizadas: "Finalizada",
};

const TablaDeTareas = () => {
  const [tareasFiltradas, filtrarTareasPorEstado] = useTareas();
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
