import { useEffect, useState } from "react";
import tareasHelper from "../helpers/tareas";

const { filtrarTareas } = tareasHelper;

export const useTareas = (dbExterna) => {
  const [tareas, setTareas] = useState(dbExterna);
  const [tareasFiltradas, setTareasFiltradas] = useState([]);

  const actualizarTareas = (tareasDb) => setTareas(tareasDb);

  const filtrarTareasPorEstado = (estado) => {
    estado === "todos" || !estado
      ? setTareasFiltradas(tareas)
      : setTareasFiltradas(filtrarTareas(estado, tareas));
  };

  return [tareasFiltradas, filtrarTareasPorEstado, actualizarTareas];
};
