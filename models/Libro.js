const mongoose = require('mongoose');
//crear un esquema de su documento (tabla)
const libroSchema = new mongoose.Schema({
  Nombre: { type: String, required: true }, //por cada campo
  Autor: { type: String, required: true },
  Precio: { type: Number, required: true },
  // se agregan los campos existentes en la tabla con su tipo
});
// se exporta el modelo segun el esquema llamado Libro
module.exports = mongoose.model('Libro', libroSchema);