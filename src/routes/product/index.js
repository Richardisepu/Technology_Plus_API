const express = require("express");
const router = express.Router();

const createProductService = require("../../services/product/createProduct");
const getProducts = require("../../services/product/getProducts");
const getProduct = require("../../services/product/getProduct");

router.post("/create-product", (req, res) => {
  createProductService(req, res);
});

router.get("/products", (req, res) => {
  getProducts(req, res);
});

router.get("/product/:id", (req, res) => {
  getProduct(req, res);
});

module.exports = router;
