const mongoose = require('mongoose');

const ejemploSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
    maxlength: [20, 'name can not be more than 20 characters'],
  },
});

const Ejemplo = mongoose.model('Ejemplo', ejemploSchema);

module.exports = Ejemplo;
