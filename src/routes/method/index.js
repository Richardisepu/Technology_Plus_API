const express = require("express");
const router = express.Router();

const createMethodService = require("../../services/method/createMethod");
const getMethods = require("../../services/method/getMethods");
const getMethod = require("../../services/method/getMethod");

router.post("/create-method", (req, res) => {
  createMethodService(req, res);
});

router.get("/methods", (req, res) => {
  getMethods(req, res);
});

router.get("/method/:id", (req, res) => {
  getMethod(req, res);
});

module.exports = router;
