const mongoose = require('mongoose');

const { Schema } = mongoose;

const UsuarioSchema = new Schema({
    nombre: {type: String, require: true},
    password: {type: String, require: true},
    rol:{type: String, require: true}
})

module.exports = mongoose.model('Usuario', UsuarioSchema);