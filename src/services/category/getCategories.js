const categorySchema = require("../../models/category");

const getCategory = async (req, res) => {
  const { id } = req.params;

  try {
    const category = await categorySchema.find({ _id: id });
    if (category) res.json(category);
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = getCategory;
