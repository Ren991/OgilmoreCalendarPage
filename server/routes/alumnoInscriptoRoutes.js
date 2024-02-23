const express = require('express');
const router = express.Router();
const alumnoInscriptoController = require('../controllers/alumnoInscriptoController');

// Crear alumno
router.post('/', alumnoInscriptoController.crearAlumnoInscripto);

// Obtener alumnos
router.get('/', alumnoInscriptoController.obtenerAlumnosInscriptos);


module.exports = router;
