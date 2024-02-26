const express = require('express');
const router = express.Router();
const alumnoInscriptoController = require('../controllers/alumnoInscriptoController');

// Crear alumno
router.post('/', alumnoInscriptoController.crearAlumnoInscripto);

// Obtener alumnos
router.get('/', alumnoInscriptoController.obtenerAlumnosInscriptos);

// Actualizar un alumno inscrito
router.put('/:id', alumnoInscriptoController.actualizarAlumnoInscripto);

// Eliminar un alumno inscrito
router.delete('/:id', alumnoInscriptoController.eliminarAlumnoInscripto);


module.exports = router;
