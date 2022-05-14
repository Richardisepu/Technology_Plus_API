const productSchema = require("../../models/product");

const getProducts = async (req, res) => {
  try {
    const produts = await productSchema.find();
    if (produts) res.json(produts);
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = getProducts;
