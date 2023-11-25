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
router.put('/v1/update/name/:_id', ejemploController.updateFullName);

// Route to delete people's lastnames by id
router.delete('/v1/delete/name/:_id', ejemploController.deleteFullName);

module.exports = router;
