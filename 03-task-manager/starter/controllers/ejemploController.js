const Ejemplo = require('../models/ejemplo');

// Controlador para crear un nuevo ejemplo
exports.createEjemplo = async (req, res) => {
  try {
    const ejemplo = new Ejemplo(req.body);
    const resultado = await ejemplo.save();
    res.json(resultado);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

// Controlador para obtener el apellido de todas las personas
exports.getLastNames = async (req, res) => {
  try {
    const ejemplos = await Ejemplo.find({}, 'nombre');
    const lastNames = ejemplos.map((e) => e.nombre.split(' ').pop());
    res.json(lastNames);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

// Controlador para convertir a "Title Case"
exports.convertToTitleCase = async (req, res) => {
  try {
    const ejemplos = await Ejemplo.find({}, 'nombre');
    const titleCaseNames = ejemplos.map((e) => toTitleCase(e.nombre));
    res.json(titleCaseNames);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Función para convertir a "Title Case"
function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
