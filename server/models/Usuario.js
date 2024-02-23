const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
  nombre: {
    type: String,
    maxlength: 50
  },
  apellido: {
    type: String,
    maxlength: 50
  },
  edad: {
    type: Number
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  cursos: [{
    type: Schema.Types.ObjectId,
    ref: 'Curso', // Referencia al modelo de Curso
    required: false
  }],
  clasesParticulares: [{
    type: Schema.Types.ObjectId,
    ref: 'ClaseParticular', // Referencia al modelo de ClaseParticular
    required: false
    }]
});

module.exports = mongoose.model('Usuario', usuarioSchema);
