const express = require('express');
const router = express.Router();
const cursoController = require('../controllers/cursoController');

// Nuevo curso
router.post('/', cursoController.crearCurso);

// Obtener cursos
router.get('/', cursoController.obtenerCursos);

module.exports = router;