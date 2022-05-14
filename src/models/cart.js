const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const products = new Schema({
  nameProduct: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const cartSchema = new Schema({
  products: [products],
});

module.exports = mongoose.model("Cart", cartSchema);
