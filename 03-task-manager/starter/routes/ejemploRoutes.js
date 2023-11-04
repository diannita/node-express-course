const express = require('express');
const router = express.Router();
const ejemploController = require('../controllers/ejemploController');

// Ruta para crear un nuevo ejemplo
router.post('/v1/create', ejemploController.createEjemplo);

// Ruta para obtener el apellido de todas las personas
router.get('/v1/lastnames', ejemploController.getLastNames);

// Ruta para convertir a "Title Case"
router.get('/v1/titlecase', ejemploController.convertToTitleCase);

module.exports = router;
