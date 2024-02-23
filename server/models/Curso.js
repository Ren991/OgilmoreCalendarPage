const mongoose = require("mongoose")
const Schema = mongoose.Schema

const cursoSchema = new Schema({
    nombre: {
      type: String,
      required: true,
      maxlength: 50
    },
    dia1: {
      type: Number,
      required: true,
      min: 1,
      max: 7
    },
    dia2: {
      type: Number,
      required: true,
      min: 1,
      max: 7
    },
    hora: {
      type: String,
      required: true
    },
    /* profesor: {
      type: Schema.Types.ObjectId,
      ref: 'Usuario' // Referencia al modelo de Usuario
    }, COMENTADO PARA QUE NO SE DEVUELVA ERROR  */
    nivel: {
      type: String,
      required: true,
      maxlength: 20
    },
    rangoEdad: {
      type: String,
      maxlength: 10
    },
    contadorAlumnos: {
      type: Number,
      max: 12
    },
    alumnos: [{
      type: Schema.Types.ObjectId,
      ref: 'Alumno' // Referencia al modelo de Alumno/Inscripto
    }]
  });
  
  module.exports = mongoose.model('Curso', cursoSchema);