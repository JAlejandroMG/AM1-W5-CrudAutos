import carsListData from './carsListData.js';


let editing = false;
let editingId = 0; 


const getInfoEdit = (id) => {
  // Selecciono el item de carsListData en base al id
  const getingCar = carsListData.find((car) => car.id === id);
  // Tomo los elementos HTML a manipular
  const inputBrand = document.getElementById('brand');
  const inputModel = document.getElementById('model');
  const inputColor = document.getElementById('color');
  const inputYear = document.getElementById('year');
  const inputPrice = document.getElementById('price');
  // Asigno valores a los campos de captura input
  inputBrand.value = getingCar.brand;
  inputModel.value = getingCar.model;
  inputColor.value = getingCar.color;
  inputYear.value = getingCar.year;
  inputPrice.value = getingCar.price;
  // Tomo el elemento HTML button con id addCar
  const submitButton = document.getElementById('submit-button');
  submitButton.textContent = "Editar modelo";
  submitButton.classList.remove('btn-primary');
  submitButton.classList.add('btn-warning');
  // Cambio el valor de mi bandera y me llevo el id del modelo que estoy editando
  editing = true;
  editingId = id;
  window.location.replace('#cars-form');
}


const editCar = () => {
  // Encuentro la posición del modelo a editar
  const position = carsListData.findIndex((car) => car.id === editingId);
  // Actualizo los valores del modelo a editar con los valores de la forma
  carsListData[position].brand = document.getElementById('brand').value;
  carsListData[position].model = document.getElementById('model').value;
  carsListData[position].color = document.getElementById('color').value;
  carsListData[position].year = document.getElementById('year').value;
  carsListData[position].price = document.getElementById('price').value;
  // Reinicio la forma
  document.getElementById('cars-form').reset();
  // Llevo el cursor al campo de Marca
  document.getElementById("brand").focus();
  // Mando llamar la función para imprimir los modelos en pantalla
  printCarsList();
  // Tomo el elemento HTML button con id addCar
  const submitButton = document.getElementById('submit-button');
  submitButton.textContent = "Agregar modelo";
  submitButton.classList.remove('btn-warning');
  submitButton.classList.add('btn-primary');
  // Cambio el valor de mi bandera y me llevo el id del modelo que estoy editando
  editing = false;
  editingId = 0;
}


const submitButton = () => editing ? editCar() : addCar();


window.getInfoEdit = getInfoEdit;
window.submitButton = submitButton;