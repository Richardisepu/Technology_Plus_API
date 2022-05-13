const express = require("express");
const router = express.Router();

const createUserService = require("../../services/user/createUser");
const getUsers = require("../../services/user/getUsers");
const getUser = require("../../services/user/getUser");

router.post("/create-user", (req, res) => {
  createUserService(req, res);
});

router.get("/users", (req, res) => {
  getUsers(req, res);
});

router.get("/user/:id", (req, res) => {
  getUser(req, res);
});

module.exports = router;
