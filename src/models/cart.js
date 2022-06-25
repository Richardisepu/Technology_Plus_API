const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const products = new Schema(
  {
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
    image: {
      type: String,
      required: true,
    },
    id_product: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

const cartSchema = new Schema({
  products: [products],
});

module.exports = mongoose.model("Cart", cartSchema);
