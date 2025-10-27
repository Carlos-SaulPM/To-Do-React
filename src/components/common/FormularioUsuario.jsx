import "./formularioUsuario.css";

const FormularioUsuario = ({ handleSubmit, handleChange, formulario }) => {
  return (
    <div className="contenedor-formulario">
      <form onSubmit={handleSubmit}>
        <label htmlFor="titulo_tarea">Título: </label>
        <input
          type="text"
          id="titulo_tarea"
          name="titulo_tarea"
          value={formulario.titulo_tarea}
          onChange={handleChange}
        />
        <label htmlFor="descripcion">Descripción:</label>
        <textarea
          id="descripcion"
          cols="30"
          rows="15"
          name="descripcion"
          value={formulario.descripcion}
          onChange={handleChange}
        ></textarea>
        <div className="contenedor-submit">
          <input type="submit" className="boton boton-submit" />
        </div>
      </form>
    </div>
  );
};

export default FormularioUsuario;
