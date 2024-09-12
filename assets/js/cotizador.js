import { idTest } from "./elementsDOM.js";
import { listaPropiedades } from "./propiedad.js";
let params = new URLSearchParams(window.location.search);
let propiedadID = params.get("propiedad-id");


const  propiedad = listaPropiedades.find((p) => p.id == propiedadID)
// for (const p of listaPropiedades) {
//     if(p.id == propiedadID){       
//         propiedad = p
//     }
// }

console.log(propiedad)
idTest.innerHTML = JSON.stringify(propiedad) // chaaaaaaaaa pero JSON aun no pue  , pero sirve para pasar un objeto a string, haaaaaa