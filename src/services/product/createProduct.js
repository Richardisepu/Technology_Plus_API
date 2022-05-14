const productSchema = require("../../models/product");

const createProduct = async (req, res) => {
  const product = productSchema(req.body);

  try {
    const productCreated = await product.save();
    if (productCreated) {
      res.json(productCreated);
    }
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = createProduct;
