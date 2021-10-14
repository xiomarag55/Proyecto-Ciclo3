const mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Usuario = mongoose.model("Usuario");

const venta = mongoose.Schema({
  registro: { type: Number, required: true },
  detalles: { type: String, required: true },
  unidades: { type: Number, required: true },
  precioUnitario: { type: Number, required: true },
  valorTotal: { type: Number, required: true },
  fecha: { type: Date, required: true },
  identificacion: { type: Number, required: true },
  comprador: { type: String, required: true },
  vendedor: { type: Schema.Types.ObjectId, ref: "Usuario" },
});
module.exports = mongoose.model("Venta", venta);
