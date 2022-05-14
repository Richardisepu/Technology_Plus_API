const methodSchema = require("../../models/method");

const getMethod = async (req, res) => {
  const { id } = req.params;

  try {
    const method = await methodSchema.find({ _id: id });
    if (method) res.json(method);
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = getMethod;
