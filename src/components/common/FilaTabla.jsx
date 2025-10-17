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
        <NavLink className="icon icon-pencil" to={`/editar/:id${id}`}></NavLink>
      </td>
      <td>
        <NavLink
          className="icon icon-trash"
          to={`/eliminar/:id${id}`}
        ></NavLink>
      </td>
      <td>
        <NavLink
          className="icon icon-check"
          to={`/finalizada/:id${id}`}
        ></NavLink>
      </td>
    </tr>
  );
};

export default FilaTabla;
