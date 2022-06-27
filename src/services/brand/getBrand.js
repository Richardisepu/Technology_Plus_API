const brandSchema = require("../../models/brand");

const getBrand = async (req, res) => {
  const { id } = req.params;

  try {
    const brand = await brandSchema.findOne({ _id: id });
    if (brand) res.json(brand);
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = getBrand;
