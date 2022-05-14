const methodSchema = require("../../models/method");

const getMethods = async (req, res) => {
  try {
    const methods = await methodSchema.find();
    if (methods) res.json(methods);
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = getMethods;
