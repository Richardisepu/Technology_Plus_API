const productSchema = require("../../models/product");

const getProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await productSchema.find({ _id: id });
    if (product) res.json(product);
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = getProduct;
