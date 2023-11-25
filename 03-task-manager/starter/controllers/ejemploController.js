const Example = require('../models/ejemplo');

// Controller to create a new example
exports.createExample = async (req, res) => {
  try {
    const example = new Example(req.body);
    const result = await example.save();
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

// Controller to get the last names of all people
exports.getLastNames = async (req, res) => {
  try {
    const examples = await Example.find({}, 'nombre');
    const lastNames = examples.map((e) => e.nombre.split(' ').pop());
    res.json(lastNames);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

// Controller to convert to "Title Case"
exports.convertToTitleCase = async (req, res) => {
  try {
    const examples = await Example.find({}, 'nombre');
    const titleCaseNames = examples.map((e) => toTitleCase(e.nombre));
    res.json(titleCaseNames);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateFullName = async (req, res) => {
  try {
    const { _id } = req.params;
    const { nombre } = req.body;

    if (!_id || !nombre) {
      return res.status(400).json({ message: 'Both _id and name are required in the request.' });
    }

    const updatedExample = await Example.findByIdAndUpdate(_id, { nombre: nombre }, { new: true });

    if (!updatedExample) {
      return res.status(404).json({ message: 'The User was not found.' });
    }

    res.json(updatedExample);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

// Controller to delete an example by ID
exports.deleteFullName = async (req, res) => {
  try {
    const { _id } = req.params;

    if (!_id) {
      return res.status(400).json({ message: 'The _id parameter is required in the request.' });
    }

    const deletedExample = await Example.findByIdAndDelete(_id);

    if (!deletedExample) {
      return res.status(404).json({ message: 'Example not found' });
    }

    res.json({ message: 'Example deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};


// Function to convert to "Title Case"
function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
