const Curso = require('../models/curso');

// CREAR CURSOs
exports.crearCurso = async (req, res) => {
  try {
    const curso = await Curso.create(req.body);
    res.status(201).json(curso);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// OBTENER CURSOS
exports.obtenerCursos = async (req, res) => {
  try {
    const cursos = await Curso.find();
    res.status(200).json(cursos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

