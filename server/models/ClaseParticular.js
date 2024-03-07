const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const claseParticularSchema = new Schema({
   alumnos: [{ 
    type: Schema.ObjectId,
    ref: 'Alumno',
    maxCount: 2 // Máximo 2 alumnos

  }], /*propiedad comentada para que no tire error*/
  /* profesor: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario' // Referencia al modelo de Usuario
  }, Propiedad comentada para que no tire error */
  nombre: {
    type: String,
    required: true
  },
  fecha: {
    type: Date,
    required: true
  },
  nivel: {
    type: String,
    required: true
  },
  descripcion: String
});

module.exports = mongoose.model('ClaseParticular', claseParticularSchema);
