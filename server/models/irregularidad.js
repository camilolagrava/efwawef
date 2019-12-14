const mongoose = require('mongoose');

const { Schema } = mongoose;

const IrregularidadSchema = new Schema({
    codigoControl: {type: Number, require: true},
    codigoMaterial: {type: Number, require: true},
    cantidad:{type: Number, require: true},
    tipo: {type: String, require: true}
})

module.exports = mongoose.model('Irregularidad', IrregularidadSchema);