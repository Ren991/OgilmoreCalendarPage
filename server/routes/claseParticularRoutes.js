const express = require('express');
const router = express.Router();
const claseParticularController = require('../controllers/claseParticularController');

//Crear clase
router.post('/', claseParticularController.crearClaseParticular);

//Obtener clase
router.get('/', claseParticularController.obtenerClasesParticulares);



module.exports = router;
