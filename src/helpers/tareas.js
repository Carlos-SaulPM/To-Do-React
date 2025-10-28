//Aux para filtrar las tareas de la base de datos
let filtrarTareas = (estadoDeTareasABuscar, arrayDeDatos) =>
  arrayDeDatos.filter((el) => el.estado === estadoDeTareasABuscar);

export default { filtrarTareas };
