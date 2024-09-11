import { listaPropiedades } from "./propiedad.js";

console.log(listaPropiedades);

// https://www.freecodecamp.org/espanol/news/prototipo-javascript-expliacado-con-ejemplos/
function Propiedad({id, tipo, urlImagen, sector, descripcion, precio, direccion, comuna, region, habitaciones, banos, estacionamiento}){
    this.id                 = id, 
    this.tipo               = tipo, 
    this.urlImagen          = urlImagen, 
    this.sector             = sector, 
    this.descripcion        = descripcion, 
    this.precio             = precio, 
    this.direccion          = direccion, 
    this.comuna             = comuna, 
    this.region             = region, 
    this.habitaciones       = habitaciones, 
    this.banos              =  banos, 
    this.estacionamiento    =  estacionamiento
}

Propiedad.prototype.getPrecio = function() {
    return this.precio
}

Propiedad.prototype.getdescripcion = function() {
    return this.descripcion
}

Propiedad.prototype.getTipo = function(){
    return this.tipo
}



