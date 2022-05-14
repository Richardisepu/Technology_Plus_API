const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  product: {
    type: String,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Cart", cartSchema);
