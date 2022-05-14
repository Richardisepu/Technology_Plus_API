const categorySchema = require("../../models/category");

const getCategories = async (req, res) => {
  try {
    const categories = await categorySchema.find();
    if (categories) res.json(categories);
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = getCategories;
