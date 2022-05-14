const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  product: {
    type: String,
    required: true,
  },
  address: {
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
  id_cart: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Order", orderSchema);
