const methodSchema = require("../../models/method");

const createMethod = async (req, res) => {
  const method = methodSchema(req.body);

  try {
    const methodCreated = await method.save();
    if (methodCreated) {
      res.json(methodCreated);
    }
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = createMethod;
