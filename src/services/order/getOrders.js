const orderSchema = require("../../models/order");

const getOrders = async (req, res) => {
  try {
    const orders = await orderSchema.find();
    if (orders) res.json(orders);
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = getOrders;
