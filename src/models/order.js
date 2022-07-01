const mongoose = require("mongoose");

const products = new mongoose.Schema(
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

const address = mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  address1: {
    type: String,
  },
  email: {
    type: String,
  },
  city: {
    type: String,
  },
  postCode: {
    type: String,
  },
});

const orderSchema = mongoose.Schema({
  products: [products],
  address,

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
