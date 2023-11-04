const { people } = require('../data');

const getPeople = (req, res) => {
  res.json(people);
};

const addPerson = (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({ success: false, message: 'Please provide a name' });
  }

  const newPerson = { id: people.length + 1, name: req.body.name };
  people.push(newPerson);
  res.status(201).json({ success: true, name: req.body.name });
};

const getPersonById = (req, res) => {
  const id = parseInt(req.params.id);
  const person = people.find((p) => p.id === id);

  if (person) {
    res.json(person);
  } else {
    res.status(404).json({ message: 'Person not found' });
  }
};

const updatePerson = (req, res) => {
  const id = parseInt(req.params.id);
  const person = people.find((p) => p.id === id);

  if (!person) {
    return res.status(404).json({ message: 'Person not found' });
  }

  if (req.body.name) {
    person.name = req.body.name;
  }

  res.json(person);
};

const deletePerson = (req, res) => {
  const id = parseInt(req.params.id);
  const index = people.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({ message: 'Person not found' });
  }

  people.splice(index, 1);
  res.status(204).end();
};

module.exports = { getPeople, addPerson, getPersonById, updatePerson, deletePerson };
