const mongoose = require('mongoose');

const { Schema } = mongoose;

const ControlBodegaSchema = new Schema({
    codigo: {type: Number, require: true},
    observaciones: {type: String, require: true},
    supervisor:{type: String, require: true},
    bodega: {type: String, require: true}
})

module.exports = mongoose.model('ControlBodega', ControlBodegaSchema);