const express = require("express");
const router = express.Router();

const createRolService = require("../../services/rol/createRol");
const getRoles = require("../../services/rol/getRoles");
const getRol = require("../../services/rol/getRol");

router.post("/create-rol", (req, res) => {
  createRolService(req, res);
});

router.get("/roles", (req, res) => {
  getRoles(req, res);
});

router.get("/rol/:id", (req, res) => {
  getRol(req, res);
});

module.exports = router;
