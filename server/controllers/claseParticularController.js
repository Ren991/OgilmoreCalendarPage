const ClaseParticular = require('../models/ClaseParticular');

//CREAR CLASE
exports.crearClaseParticular = async (req, res) => {
  try {
    const claseParticular = await ClaseParticular.create(req.body);
    res.status(201).json(claseParticular);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// OBTENER CLASES
exports.obtenerClasesParticulares = async (req, res) => {
  try {
    const clasesParticulares = await ClaseParticular.find();
    res.status(200).json(clasesParticulares);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

