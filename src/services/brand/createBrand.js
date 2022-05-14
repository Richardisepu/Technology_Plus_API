const brandSchema = require("../../models/brand");

const createBrand = async (req, res) => {
  const brand = brandSchema(req.body);

  try {
    const brandCreated = await brand.save();
    if (brandCreated) {
      res.json(brandCreated);
    }
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = createBrand;
