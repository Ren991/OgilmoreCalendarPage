const express = require('express');
const router = express.Router();
const claseParticularController = require('../controllers/claseParticularController');

//Crear clase
router.post('/', claseParticularController.crearClaseParticular);

//Obtener clase
router.get('/', claseParticularController.obtenerClasesParticulares);

// Ruta para actualizar una clase particular
router.put('/:id', claseParticularController.actualizarClaseParticular);

// Ruta para eliminar una clase particular
router.delete('/:id', claseParticularController.eliminarClaseParticular);


module.exports = router;
