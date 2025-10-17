import { NavLink } from "react-router";

NavLink;
const FilaTabla = ({ tarea }) => {
  const { id, titulo, descripcion, estado } = tarea;
  return (
    <tr>
      <td>{id}</td>
      <td>{titulo}</td>
      <td>{descripcion}</td>
      <td>{estado}</td>
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
