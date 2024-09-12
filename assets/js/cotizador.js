import { idTest } from "./elementsDOM.js";
import { listaPropiedades } from "./propiedad.js";
let params = new URLSearchParams(window.location.search);
//let propiedadID = params.get("propiedad-id");

let propiedadID = '13';

const  propiedad = listaPropiedades.find((p) => p.id == propiedadID)
// for (const p of listaPropiedades) {
//     if(p.id == propiedadID){       
//         propiedad = p
//     }
// }

//console.log(propiedad)
//idTest.innerHTML = JSON.stringify(propiedad) 
idTest.innerHTML = `<div class="card mb-3" style="width: 18rem;">
            <img id="img_cotizador" src="${propiedad.urlImagen}" class="card-img-top" alt="${propiedad.comuna}, ${propiedad.region}">
            <div class="card-body">
              <h5 class="card-title">${propiedad.direccion}, ${propiedad.comuna}, ${propiedad.region}</h5>
              <p class="card-text"><small class="text-muted">${propiedad.tipo} / ${propiedad.habitaciones} Hab. / ${propiedad.banos} Baños</small></p>
               <h5 class="card-title text-end">UF ${propiedad.precio}</h5>
              <p class="card-text">${propiedad.descripcion}</p>
            </div>
            <ul class="list-group list-group-flush">
             <li class="list-group-item "><strong>Seleccione Tipo de Seguro</strong></li>
             <li class="list-group-item">
             
             <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
             <input type="radio" class="btn-check" name="btnradio" id="seguro_basico" autocomplete="off" checked>
            <label class="btn btn-outline-warning" for="seguro_basico">Basico</label>

            <input type="radio" class="btn-check" name="btnradio" id="seguro_completo" autocomplete="off">
            <label class="btn btn-outline-warning" for="seguro_completo">Completo</label>
            </div>

            </li>
            <li class="list-group-item"><strong>Valor de Prima: UF ${propiedad.precio /1200}</strong></li>
            </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
          </div>`;