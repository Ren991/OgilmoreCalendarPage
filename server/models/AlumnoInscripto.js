const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ClaseParticular = mongoose.model('ClaseParticular');

const alumnoInscriptoSchema = new Schema({
  nombre: {
    type: String,
    maxlength: 50
  },
  apellido: {
    type: String,
    maxlength: 50
  },
  email: {
    type: String,
    maxlength: 60
  },
  edad: {
    type: Number
  },
  curso: {
    type: Schema.Types.ObjectId,
    ref: 'Curso', // Referencia al modelo de Curso
    required: false
  },
  fechaInscripcion: {
    type: Date
  },
  claseIndividual: {
    type: Schema.ObjectId,
    ref: 'ClaseParticular', // Referencia al modelo de ClaseParticular
    required: false
},
  celular: {
    type: Number
  },
  isCursoConfirmed: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('AlumnoInscripto', alumnoInscriptoSchema);
