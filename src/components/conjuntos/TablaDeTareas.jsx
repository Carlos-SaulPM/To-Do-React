import { useEffect, useState } from "react";
import FilaTabla from "../common/FilaTabla";
import "./tablaDeTareas.css";
import { useTable } from "../../hooks/useTable";
import { useParams } from "react-router";

const estadosDeTareas = {
  por_hacer: "Por hacer",
  en_proceso: "En proceso",
  finalizadas: "Finalizada",
};

const TablaDeTareas = () => {
  const [data, filtrarDataPorEstado] = useTable();
  const { estado } = useParams();

  useEffect(() => {
    const estadoFiltrado = !estado ? "todos" : estadosDeTareas[estado];
    filtrarDataPorEstado(estadoFiltrado);
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
            <th colSpan={2}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((tarea, index) => (
            <FilaTabla tarea={tarea} key={index} />
          ))}
        </tbody>
      </table>
      <h4>Paginado</h4>
    </div>
  );
};

export default TablaDeTareas;
