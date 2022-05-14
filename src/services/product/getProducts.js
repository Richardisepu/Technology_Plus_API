const produtSchema = require("../../models/produt");

const getProducts = async (req, res) => {
  try {
    const produts = await produtSchema.find();
    if (produts) res.json(produts);
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = getProducts;
