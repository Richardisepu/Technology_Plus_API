const express = require("express");
const router = express.Router();

const createBrandService = require("../../services/brand/createBrand");
const getBrands = require("../../services/brand/getBrands");
const getBrand = require("../../services/brand/getBrand");

router.post("/create-brand", (req, res) => {
  createBrandService(req, res);
});

router.get("/brands", (req, res) => {
  getBrands(req, res);
});

router.get("/brand/:id", (req, res) => {
  getBrand(req, res);
});

module.exports = router;
