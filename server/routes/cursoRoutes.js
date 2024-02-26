const express = require('express');
const router = express.Router();
const cursoController = require('../controllers/cursoController');

// Nuevo curso
router.post('/', cursoController.crearCurso);

// Obtener cursos
router.get('/', cursoController.obtenerCursos);

// Ruta para actualizar un curso
router.put('/:id', cursoController.actualizarCurso);

// Ruta para eliminar un curso
router.delete('/:id', cursoController.eliminarCurso);

module.exports = router;