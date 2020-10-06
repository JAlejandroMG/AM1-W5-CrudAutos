import carsListData from './carsListData.js';


/* Requerimiento: agregar un modelo al listado de autos y mostrarlo en pantalla */
/*
1- Recibo información
  1.1- Tengo array importado carsListData con el listado de autos
  1.2- El usuario ingresa información del nuevo item para agregar en el listado de autos
2- Proceso información
  2.1- Creo función addCar y la hago global
  2.2- Asigno los datos ingresados por el ususario en las variables const brand, model, color, year, price
  2.3- Reviso si tengo el modelo registrado es el de muestra (id === 0)
    2.3.1- Asigno el valor de la longitud del array carsListData + 1, a la variable const id
    2.3.2- Asigno los valores a una variable array cons newCar
    2.3.3- Agrego la variable newCar al array carsListData
  2.4 Reinicio la forma
  2.5 Llevo el cursor al campo de Marca
  2.4- Mando llamar la función printCarsList para mostrar el modelo agregado
3- Regreso Información
  3.1- Muestro en pantalla el listado de autos actualizado
*/
/* Funciones */
/*
1- addCar
*/
/* Variables */
/*
1. const id
2- const brand
3- const model
4- const color
5- const year
6- const price
7- let newCar
*/



const addCar = () => {
  const brand = document.getElementById('brand').value;
  const model = document.getElementById('model').value;
  const color = document.getElementById('color').value;
  const year = document.getElementById('year').value;
  const price = document.getElementById('price').value;
  
  let newId = 0;
  if(carsListData.length) {
    const lastId = carsListData[(carsListData.length)-1].id;
    newId = lastId + 1;
  } else {
    newId = 1;
  }
  
  let newCar = {'id': newId , 'brand': brand, 'model': model, 'color': color, 'year': year, 'price': price};
  
  carsListData.push(newCar);

  document.getElementById('cars-form').reset();
  document.getElementById("brand").focus();
  
  printCarsList();
}

window.addCar = addCar;