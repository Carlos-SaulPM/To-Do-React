import { createContext } from "react";
import { useTareas } from "../hooks/useTareas";

const TareaContext = createContext();
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

const TareaProvider = ({ children }) => {
  const [tareasFiltradas, filtrarTareasPorEstado, actualizarTareas] =
    useTareas(tareasLocales); //hook de las tareas
  const data = { tareasFiltradas, filtrarTareasPorEstado, actualizarTareas };
  return <TareaContext.Provider value={data}>{children}</TareaContext.Provider>;
};

export { TareaProvider };
export default TareaContext;
