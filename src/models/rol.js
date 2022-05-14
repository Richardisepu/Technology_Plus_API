const mongoose = require("mongoose");

const rolSchema = mongoose.Schema({
  nameRol: {
    type: String,
    required: true,
  },
  permission: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Rol", rolSchema);
