import React from "react";
import "./radioBoton.css";

const RadioBoton = ({ nameRadioBoton = "categoria", value, label }) => {
  return (
    <>
      <input
        type="radio"
        id={value}
        name={nameRadioBoton}
        value={value}
        className="radio-input"
      />
      <label htmlFor={value} className="radio-label">
        {label}
      </label>
    </>
  );
};

export default RadioBoton;
