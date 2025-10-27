import { useState } from "react";

export const useForm = (formInicial) => {
  const [formulario, setFormulario] = useState(formInicial);

  let handleChange = (e) => {
    e.preventDefault();
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };
  let handleSubmit = (e) => {
    e.preventDefault();

    alert("Funciona");
  };

  return [formulario, handleChange, handleSubmit];
};
