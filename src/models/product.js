const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  id_brand: {
    type: String,
    required: true,
  },
  id_category: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
