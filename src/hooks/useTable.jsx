import { useEffect, useState } from "react";

const dbLocalEjemplo = [
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
export const useTable = (dbExterna) => {
  const [dbLocal, setDbLocal] = useState(dbLocalEjemplo);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (dbExterna) setDbLocal(dbExterna);
  }, [dbExterna]);

  const filtrarDataPorEstado = (estado) => {
    if (estado === "todos" || !estado) {
      setData(dbLocal);
    } else {
      setData(filtrarDb(estado, dbLocal));
    }
  };

  return [data, filtrarDataPorEstado];
};

//Aux para filtrar las tareas de la base de datos
let filtrarDb = (estadoDeTareasABuscar, arrayDeDatos) =>
  arrayDeDatos.filter((el) => el.estado === estadoDeTareasABuscar);
