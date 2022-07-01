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
  address: {
    type: Object,
  },
  id_rol: {
    type: Array,
  },
});

module.exports = mongoose.model("User", userSchema);
