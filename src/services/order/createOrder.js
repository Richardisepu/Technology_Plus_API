const orderSchema = require("../../models/order");

const createOrder = async (req, res) => {
  const order = orderSchema(req.body);

  try {
    const orderCreated = await order.save();
    if (orderCreated) {
      res.json(orderCreated);
    }
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = createOrder;
