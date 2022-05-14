const express = require("express");
const router = express.Router();

const createOrderService = require("../../services/order/createOrder");
const getOrders = require("../../services/order/getOrders");
const getOrder = require("../../services/order/getOrder");

router.post("/create-order", (req, res) => {
  createOrderService(req, res);
});

router.get("/orders", (req, res) => {
  getOrders(req, res);
});

router.get("/order/:id", (req, res) => {
  getOrder(req, res);
});

module.exports = router;
