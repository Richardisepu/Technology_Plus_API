const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  rut: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  id_rol: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Contact", contactSchema);
