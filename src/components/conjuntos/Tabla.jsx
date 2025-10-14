import FilaTabla from "../common/FilaTabla";
import "./tabla.css";

const Tabla = () => {
  return (
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
        <FilaTabla></FilaTabla>
        <FilaTabla></FilaTabla>
      </tbody>
    </table>
  );
};

export default Tabla;
