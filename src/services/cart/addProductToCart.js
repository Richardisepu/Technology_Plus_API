const CartModel = require("../../models/cart");

const addProductToCartService = async (req, res) => {
  const data = req.body;
  try {
    const currentCart = await CartModel.findOne({ _id: data.cartId });

    if (!currentCart) {
      res.status(404);
      throw res.json({ message: "CART_NOT_FOUND", code: 404 });
    }
    const cartJsonString = JSON.stringify(currentCart);

    const newCart = JSON.parse(cartJsonString);

    newCart.products = newCart.products.concat(data.products);

    const groupProductCart = newCart.products.reduce(
      (previousValue, currentValue) => {
        let found = previousValue.find(
          (product) => product.id_product === currentValue.id_product
        );
        if (found) {
          found.quantity = found.quantity + currentValue.quantity;
        } else {
          previousValue.push(currentValue);
        }
        return previousValue;
      },
      []
    );

    const updateCart = await CartModel.findByIdAndUpdate(
      { _id: data.cartId },
      { products: groupProductCart },
      { new: true }
    );

    if (updateCart.matchedCount === 0) {
      res.status(404);
      throw res.json({ message: "ERROR_TO_UPDATE_CART", code: 400 });
    }

    res.status(200);
    return res.json(updateCart);
  } catch (err) {
    console.log(err);
    throw res.json({ message: err.message });
  }
};

module.exports = addProductToCartService;
