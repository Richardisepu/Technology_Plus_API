const mongoose = require("mongoose");

const methodSchema = mongoose.Schema({
  tokenVerification: {
    type: String,
    required: true,
  },
  payment_method: {
    type: String,
    required: true,
  },
  id_user: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Method", methodSchema);
