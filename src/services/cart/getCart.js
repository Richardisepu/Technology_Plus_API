const cartSchema = require("../../models/cart");

const getCart = async (req, res) => {
  const { id } = req.params;

  try {
    const cart = await cartSchema.find({ _id: id });
    if (cart) res.json(cart);
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = getCart;
