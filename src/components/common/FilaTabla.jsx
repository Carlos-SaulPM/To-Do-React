import { NavLink } from "react-router";

NavLink;
const FilaTabla = () => {
  return (
    <tr>
      <td>1</td>
      <td>Prueba de tarea</td>
      <td>Descripción de prueba</td>
      <td>Estado</td>
      <td>
        <NavLink className="icon-pencil"></NavLink>
      </td>
      <td>
        <NavLink className="icon-trash"></NavLink>
      </td>
    </tr>
  );
};

export default FilaTabla;
