const mongoose = require('mongoose');

const { Schema } = mongoose;

const AlertaSchema = new Schema({
    codigo: {type: Number, require: true},
    nombre: {type: String, require: true},
    codigoMaterial:{type: Number, require: true},
    cantidadMinima: {type: Number, require: true}
})

module.exports = mongoose.model('Alerta', AlertaSchema);