const mongoose = require("mongoose");

const brandSchema = mongoose.Schema({
  nameBrand: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Brand", brandSchema);
