const express = require("express");
const router = express.Router();

const createCategoryService = require("../../services/category/createCategory");
const getCategories = require("../../services/category/getCategories");
const getCategory = require("../../services/category/getCategory");

router.post("/create-category", (req, res) => {
  createCategoryService(req, res);
});

router.get("/categories", (req, res) => {
  getCategories(req, res);
});

router.get("/category/:id", (req, res) => {
  getCategory(req, res);
});

module.exports = router;
