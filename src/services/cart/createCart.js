const cartSchema = require("../../models/cart");

const createCart = async (req, res) => {
  const cart = cartSchema(req.body);

  try {
    const cartCreated = await cart.save();
    if (cartCreated) {
      res.json(cartCreated);
    }
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = createCart;
