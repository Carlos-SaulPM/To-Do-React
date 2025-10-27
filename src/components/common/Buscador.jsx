import "./buscador.css";

const Buscador = ({ name, OnSubmit }) => {
  const stylesBarraBusqueda = {};
  const botonBusqueda = {};

  return (
    <form onSubmit={OnSubmit} className="buscador">
      <input
        type="search"
        style={stylesBarraBusqueda}
        name={name}
        id={name}
        placeholder="Buscar tarea"
      />

      <button type="submit" className="boton">
        Buscar
      </button>
    </form>
  );
};

export default Buscador;
