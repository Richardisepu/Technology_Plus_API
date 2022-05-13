const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
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
  },
});

module.exports = mongoose.model("User", userSchema);
