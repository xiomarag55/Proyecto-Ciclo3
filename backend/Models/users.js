const mongoose = require('mongoose');

const usuario = mongoose.Schema({
  identification: { type: String, required: true },
  name: { type: String, required: true },
  role: { type: String, required: true },
  status: { type: String, required: true }
});
module.exports = mongoose.model("Usuario", usuario);