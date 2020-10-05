import carsListData from './carsListData.js';


/* Requerimiento: imprimir listado de autos en pantalla */
/*
1- Recibo información
  1.1- Tengo array importado carsListData con el listado de autos de ejemplo
2- Proceso información
  2.1- Creo función printCarsList y la hago global
  2.2- Identifico el elmento de HTML donde voy a imprimir el listado por medio de su id
    2.2.1- Obtengo el elemento y se lo asigno a la variable let carsList
  2.3- Vacío el contenido HTML de carsList
  2.4- Recorro el listado de autos con el método forEach
    2.4.1- Recorro los valores de cada item del listado de autos imprimiéndolo de acuerdo al elemento HTML y se lo asigno a la variable const card
    2.4.2- Le agrego el valor de card al contenido HTML de carsList
3- Regreso Información
  3.1- Muestro en pantalla el listado de autos.
*/
/* Funciones */
/*
1- printCarsList
*/
/* Variables */
/*
1- let carsList
2- let card
*/

const printCarsList = () => {
  let carsList = document.getElementById('cars-list');
  carsList.innerHTML = "";
  carsListData.forEach((car) => {
    const card =  `<div class="col-sm-6 col-md-4 col-xl-3 mb-3">
                    <div class="card bg-darker text-center">
                      <h5 onclick="deleteCar(${car.id})" class="card-header">${car.brand}</h5>
                      <div onclick="getInfoEdit(${car.id})" class="card-body bg-dark pt-2 pb-2">
                        <h5 class="card-title mb-0">${car.model}</h5>
                        <p class="card-text mb-0">${car.color}</p>
                        <p class="card-text mb-0">${car.year}</p>
                        <p class="card-text mb-0">$${car.price}</p>
                      </div>
                    </div>
                  </div>`;
    carsList.innerHTML += card;
  })
};

printCarsList();

window.printCarsList = printCarsList;
