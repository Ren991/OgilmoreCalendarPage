const ClaseParticular = require('../models/ClaseParticular');
const AlumnoInscripto = require('../models/AlumnoInscripto');

//CREAR CLASE
exports.crearClaseParticular = async (req, res) => {
  try {
    const claseParticular = await ClaseParticular.create(req.body);
    let id = claseParticular.id;
    for(let i=0; i<claseParticular.alumnos.length; i++){
      let alumno = claseParticular.alumnos[i]
     //console.log(alumno);
      /* */await AlumnoInscripto.findByIdAndUpdate(alumno, {
        claseIndividual : id
      }) 
    }
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

// ACTUALIZAR CLASE PARTICULAR
exports.actualizarClaseParticular = async (req, res) => {
  try {
    const claseParticular = await ClaseParticular.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ message: 'Clase particular actualizada correctamente', claseParticular });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// ELIMINAR CLASE PARTICULAR 
exports.eliminarClaseParticular = async (req, res) => {
  try {
    await ClaseParticular.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Clase particular eliminada correctamente' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

