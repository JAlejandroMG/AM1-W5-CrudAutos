import carsListData from './carsListData.js';


const deleteCar = (id) => {
  // Encuentro la posición del modelo a editar
  const position = carsListData.findIndex((car) => car.id === id);
  // Elimino el modelo
  carsListData.splice(position, 1);
  // Llevo el cursor al campo de Marca
  document.getElementById("brand").focus();
  // Mando llamar la función para imprimir los modelos en pantalla
  printCarsList();
}


window.deleteCar = deleteCar;