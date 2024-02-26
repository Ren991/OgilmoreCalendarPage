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

// ACTUALIZAR CURSO
exports.actualizarCurso = async (req, res) => {
  try {
    const curso = await Curso.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ message: 'Curso actualizado correctamente', curso });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// ELIMINAR CURSO
exports.eliminarCurso = async (req, res) => {
  try {
    await Curso.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Curso eliminado correctamente' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};