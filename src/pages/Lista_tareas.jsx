import Boton from "../components/Boton";
import RadioBoton from "../components/RadioBoton";
import Buscador from "../components/Buscador";
import "./lista_tareas.css";

const Lista_tareas = () => {
  const agregar = () => {
    console.log("Agregando");
  };

  return (
    <div>
      <h1>Lista de tareas</h1>
      <section className="contenedor-botones">
        <Boton OnClick={agregar} tituloBoton="Agregar tarea" />
        <br />
        <br />
        <div className="grupo-radio">
          <RadioBoton nameRadioBoton="tareas" value="todos" label="Todos" />
          <RadioBoton
            nameRadioBoton="tareas"
            value="por_hacer"
            label="Por hacer"
          />
          <RadioBoton
            nameRadioBoton="tareas"
            value="en_proceso"
            label="En proceso"
          />
          <RadioBoton
            nameRadioBoton="tareas"
            value="finalizadas"
            label="Finalizadas"
          />
        </div>
        <br />
        <br />
        <Buscador />
      </section>
    </div>
  );
};

export default Lista_tareas;
