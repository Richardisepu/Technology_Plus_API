const categorySchema = require("../../models/category");

const createCategory = async (req, res) => {
  const user = categorySchema(req.body);

  try {
    const categoryCreated = await user.save();
    if (categoryCreated) {
      res.json(categoryCreated);
    }
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = createCategory;
