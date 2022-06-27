const productSchema = require("../../models/product");
const brandSchema = require("../../models/brand");
const categorySchema = require("../../models/category");

const createProduct = async (req, res) => {
  const product = productSchema(req.body);

  try {
    const findCategory = await categorySchema.find({
      _id: product.id_category,
    });

    if (!findCategory.length) {
      res.status(404);
      return res.json({ message: "CATEGORY_NOT_FOUND", error: 404 });
    }

    const findBrand = await brandSchema.find({
      _id: product.id_brand,
    });

    if (!findBrand.length) {
      res.status(404);
      return res.json({ message: "BRAND_NOT_FOUND", error: 404 });
    }

    const productCreated = await product.save();
    if (productCreated) {
      return res.json(productCreated);
    }
  } catch (err) {
    throw res.json({ message: err });
  }
};

module.exports = createProduct;
