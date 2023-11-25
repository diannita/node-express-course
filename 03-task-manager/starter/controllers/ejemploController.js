const Example = require('../models/ejemplo');
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../errors/custom-error');

// Controller to create a new example
exports.createExample = asyncWrapper (async (req, res) => {
    const example = new Example(req.body);
    const result = await example.save();
    res.json(result);
});

// Controller to get the last names of all people
exports.getLastNames = asyncWrapper (async (req, res) => {
    const examples = await Example.find({}, 'nombre');
    const lastNames = examples.map((e) => e.nombre.split(' ').pop());
    res.json(lastNames);
});

// Controller to convert to "Title Case"
exports.convertToTitleCase = asyncWrapper (async (req, res) => {
    const examples = await Example.find({}, 'nombre');
    const titleCaseNames = examples.map((e) => toTitleCase(e.nombre));
    res.json(titleCaseNames);
});

exports.updateFullName = asyncWrapper (async (req, res) => {
    const { _id: nombreID } = req.params;
    const { nombre } = req.body;

    if (!_id || !nombre) {
      return res.status(400).json({ message: 'Both _id and name are required in the request.' });
    }

    const updatedExample = await Example.findByIdAndUpdate(_id, { nombre: nombre }, { new: true });

    if (!updatedExample) {
      return next(createCustomError(`No name with Id: ${nombreID} was found..`, 404));
    }

    res.json(updatedExample);
});

// Controller to delete an example by ID
exports.deleteFullName = asyncWrapper (async (req, res) => {
    const { _id: nombreID } = req.params;

    if (!_id) {
      return res.status(400).json({ message: 'The _id parameter is required in the request.' });
    }

    const deletedExample = await Example.findByIdAndDelete(_id);

    if (!deletedExample) {
      return next(createCustomError(`No name with Id: ${nombreID} was found..`, 404));
    }

    res.json({ message: 'Example deleted successfully' });
});

// Controller to show one full name by ID
exports.getOneFullName = asyncWrapper (async (req, res, next) => {
    const { id: nombreID } = req.params;
    const nombre = await Example.findOne({ _id: nombreID });

    if (!nombreID) {
      return next(createCustomError(`No name with Id: ${nombreID} was found..`, 404));
    }
    res.status(200).json({ nombre });
})

// Controller show all names from collections
exports.getAllFullName = asyncWrapper (async (req, res) => {
    const nombre = await Example.find({});
    res.status(200).json({ nombre });
})

// Function to convert to "Title Case"
function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
