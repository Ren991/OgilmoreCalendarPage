const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// Crear usuario
router.post('/', usuarioController.crearUsuario);

//Obtener usuarios
router.get('/', usuarioController.obtenerUsuarios);

// Ruta para actualizar un usuario
router.put('/:id', usuarioController.actualizarUsuario);

// Ruta para eliminar un usuario
router.delete('/:id', usuarioController.eliminarUsuario);


module.exports = router;
