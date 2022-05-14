const express = require("express");
const router = express.Router();

const createCartService = require("../../services/cart/createCart");
const getCarts = require("../../services/cart/getCarts");
const getCart = require("../../services/cart/getCart");

router.post("/create-cart", (req, res) => {
  createCartService(req, res);
});

router.get("/carts", (req, res) => {
  getCarts(req, res);
});

router.get("/cart/:id", (req, res) => {
  getCart(req, res);
});

module.exports = router;
