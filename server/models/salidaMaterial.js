const mongoose = require('mongoose');

const { Schema } = mongoose;

const SalidaMaterialSchema = new Schema({
    codigo: {type: Number, require: true},
    cantidad: {type: Number, require: true},
    oficina:{type: String, require: true},
    funcionario: {type: String, require: true}
})

module.exports = mongoose.model('SalidaMaterial', SalidaMaterialSchema);