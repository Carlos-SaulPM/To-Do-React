import { useEffect, useState } from "react";

const tareasLocales = [
  {
    id: 1,
    titulo: "Esto es un titulo",
    descripcion: "Ejemplo de descripción",
    estado: "Por hacer",
  },
  {
    id: 2,
    titulo: "Esto es un titulo",
    descripcion: "Ejemplo de descripción",
    estado: "En proceso",
  },
  {
    id: 3,
    titulo: "Esto es un titulo",
    descripcion: "Ejemplo de descripción",
    estado: "Finalizada",
  },
];
export const useTareas = (dbExterna) => {
  const [tareas, setTareas] = useState(tareasLocales);
  const [tareasFiltradas, setTareasFiltradas] = useState([]);

  useEffect(() => {
    if (dbExterna) setTareas(dbExterna);
  }, [dbExterna]);

  const filtrarTareasPorEstado = (estado) => {
    if (estado === "todos" || !estado) {
      setTareasFiltradas(tareas);
    } else {
      setTareasFiltradas(filtrarTareas(estado, tareas));
    }
  };

  return [tareasFiltradas, filtrarTareasPorEstado];
};

//Aux para filtrar las tareas de la base de datos
let filtrarTareas = (estadoDeTareasABuscar, arrayDeDatos) =>
  arrayDeDatos.filter((el) => el.estado === estadoDeTareasABuscar);
