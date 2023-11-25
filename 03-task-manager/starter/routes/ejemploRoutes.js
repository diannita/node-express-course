const express = require('express');
const router = express.Router();
const ejemploController = require('../controllers/ejemploController');

//CRUD => Create, Read, Update, Delete

// Route to create a name
router.post('/v1/create/name', ejemploController.createExample);

// Route to get people's name and lastnames
router.get('/v1/read/lastnames', ejemploController.getLastNames);

// Route to convert "Title Case"
router.get('/v1/read/titlecase', ejemploController.convertToTitleCase);

// Route to edit people's lastnames by id
router.put('/v1/update/name/:id', ejemploController.updateFullName);

// Route to delete people's lastnames by id
router.delete('/v1/delete/name/:id', ejemploController.deleteFullName);

// Route to get one people's full name
router.get('/v1/get-one/name/:id', ejemploController.getOneFullName);

// Route to get all people's names
router.get('/v1/get-all/names', ejemploController.getAllFullName);

module.exports = router;
