const mongoose = require('mongoose');

const { Schema } = mongoose;

const ControlMaterialSchema = new Schema({
    codigo: {type: Number, require: true},
    observaciones: {type: String, require: true},
    oficina:{type: String, require: true},
})

module.exports = mongoose.model('ControlMaterial', ControlMaterialSchema);