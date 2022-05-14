const brandSchema = require("../../models/brand");

const getBrands = async (req, res) => {
  try {
    const brands = await brandSchema.find();
    if (brands) res.json(brands);
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = getBrands;
