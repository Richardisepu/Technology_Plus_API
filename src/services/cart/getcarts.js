const cartSchema = require("../../models/cart");

const getCarts = async (req, res) => {
  try {
    const carts = await cartSchema.find();
    if (carts) res.json(carts);
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = getCarts;
