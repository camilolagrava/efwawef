const mongoose = require('mongoose');

const { Schema } = mongoose;

const IngresoMaterialSchema = new Schema({
    codigo: {type: Number, require: true},
    cantidad: {type: Number, require: true},
    mes:{type: Number, require: true},
    anio: {type: Number, require: true},
    bodega: {type: String, require: true}
})

module.exports = mongoose.model('IngresoMaterial', IngresoMaterialSchema);