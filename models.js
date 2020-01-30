const mongoose = require("mongoose");

const Coche = mongoose.model("Coche", {
  marca: String,
  modelo: String,
  color: String
});

const Cliente = mongoose.model("Cliente", {
  nombre: String,
  apellidos: String,
  fecha_alta: String
});

module.exports = {
  Coche,
  Cliente
};