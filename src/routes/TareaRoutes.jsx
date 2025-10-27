import { Route } from "react-router";
import FormularioUsuario from "../components/common/FormularioUsuario";
import { useForm } from "../hooks/useForm";
import Tarea from "../pages/Tarea";
const formInicial = { titulo_tarea: "", descripcion: "" };
const TareaRoutes = () => {
  const [formulario, handleChange, handleSubmit] = useForm(formInicial);

  return (
    <Route path="tarea" element={<Tarea />}>
      <Route index element={<h3>Detalles de tareas</h3>} />
      <Route
        path=":accionTarea/:id?"
        element={
          <FormularioUsuario
            formulario={formulario}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        }
      />
    </Route>
  );
};

export default TareaRoutes;
