const orderSchema = require("../../models/order");

const getOrder = async (req, res) => {
  const { id } = req.params;

  try {
    const order = await orderSchema.find({ _id: id });
    if (order) res.json(order);
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = getOrder;
