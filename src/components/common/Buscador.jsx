import React from "react";

const Buscador = ({ name, OnSubmit }) => {
  const stylesBarraBusqueda = {
    borderRadius: "0.4rem",
    width: "20rem",
    height: "2.5rem",
    fontSize: "var(--step-0)",
  };
  const botonBusqueda = {
    fontSize: "var(--step-0)",
    width: "7rem",
    maxHeight: "2rem",
    marginLeft: "2rem",
  };

  return (
    <form onSubmit={OnSubmit}>
      <input
        type="search"
        style={stylesBarraBusqueda}
        name={name}
        id={name}
        placeholder="Buscar tarea"
      />

      <button type="submit" style={botonBusqueda}>
        Buscar
      </button>
    </form>
  );
};

export default Buscador;
