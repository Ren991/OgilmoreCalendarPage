const AlumnoInscripto = require('../models/AlumnoInscripto');

// crear Alumno Inscripto
exports.crearAlumnoInscripto = async (req, res) => {
  try {
    const alumnoInscripto = await AlumnoInscripto.create(req.body);
    res.status(201).json(alumnoInscripto);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener alumnos
exports.obtenerAlumnosInscriptos = async (req, res) => {
  try {
    const alumnosInscriptos = await AlumnoInscripto.find();
    res.status(200).json(alumnosInscriptos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ACTUALIZAR ALUMNOINSCRIPTO
exports.actualizarAlumnoInscripto = async (req, res) => {
  try {
    const alumnoInscripto = await AlumnoInscripto.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ message: 'Alumno inscripto actualizado correctamente', alumnoInscripto });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//ELIMINAR ALUMNO INSCRIPTO
exports.eliminarAlumnoInscripto = async (req, res) => {
  try {
    await AlumnoInscripto.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Alumno inscripto eliminado correctamente' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};