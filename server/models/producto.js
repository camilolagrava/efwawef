const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProductoSchema = new Schema({
    codigo: {type: Number, require: true},
    descripcion: {type: String, require: true},
    lugar:{type: String, require: true}
})

module.exports = mongoose.model('Producto', ProductoSchema);