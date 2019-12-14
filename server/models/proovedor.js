const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProovedorSchema = new Schema({
    nombre: {type: String, require: true},
    carnet: {type: Number, require: true},
    empresa:{type: String, require: false}    
})

module.exports = mongoose.model('Proovedor', ProovedorSchema);