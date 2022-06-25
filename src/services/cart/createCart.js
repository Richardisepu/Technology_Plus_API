const CartSchema = require("../../models/cart");

const createCart = async (req, res) => {
  const cart = new CartSchema(req.body);

  try {
    cart.validateSync();
    const cartCreated = await cart.save();
    if (cartCreated) {
      res.status(201);
      return res.json(cartCreated);
    }
  } catch (err) {
    return res.json({ message: err.message });
  }
};

module.exports = createCart;
