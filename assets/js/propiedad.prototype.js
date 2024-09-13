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

Propiedad.prototype.getId = function() {
    return this.id;
};

Propiedad.prototype.getTipo = function() {
    return this.tipo;
};

Propiedad.prototype.getUrlImagen = function() {
    return this.urlImagen;
};

Propiedad.prototype.getSector = function() {
    return this.sector;
};

Propiedad.prototype.getDescripcion = function() {
    return this.descripcion;
};

Propiedad.prototype.getPrecio = function() {
    return this.precio;
};

Propiedad.prototype.getDireccion = function() {
    return this.direccion;
};

Propiedad.prototype.getComuna = function() {
    return this.comuna;
};

Propiedad.prototype.getRegion = function() {
    return this.region;
};

Propiedad.prototype.getHabitaciones = function() {
    return this.habitaciones;
};

Propiedad.prototype.getBanos = function() {
    return this.banos;
};

Propiedad.prototype.getEstacionamiento = function() {
    return this.estacionamiento;
};

export default Propiedad