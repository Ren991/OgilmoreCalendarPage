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

