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
        <NavLink
          className="icon icon-pencil"
          to={`/tarea/editar/${id}`}
        ></NavLink>
      </td>
      <td>
        <NavLink
          className="icon icon-trash"
          to={`/tarea/eliminar/${id}`}
        ></NavLink>
      </td>
      <td>
        <NavLink
          className="icon icon-check"
          to={`/tarea/finalizada/${id}`}
        ></NavLink>
      </td>
    </tr>
  );
};

export default FilaTabla;
