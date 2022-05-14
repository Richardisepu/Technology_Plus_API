const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  nameProduct: {
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
  id_brand: {
    type: String,
    required: true,
  },
  id_categoria: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
