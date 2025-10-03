import React from "react";

const Buscador = ({ name, OnSubmit }) => {
  return (
    <form onSubmit={OnSubmit}>
      <input type="search" name={name} id={name} />

      <input type="submit" value="Buscar" />
    </form>
  );
};

export default Buscador;
