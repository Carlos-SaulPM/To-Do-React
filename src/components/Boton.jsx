import React from "react";
import "./boton.css";

const Boton = ({ OnClick, tituloBoton = "Botton" }) => {
  return (
    <>
      <button onClick={OnClick}>{tituloBoton}</button>
    </>
  );
};

export default Boton;
