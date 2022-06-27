const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const products = new Schema({
  productName: {
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
  id_product: {
    type: String,
    required: true,
  },
});

const cartProduct = new Schema({
  products: [products],
});

module.exports = cartProduct;
