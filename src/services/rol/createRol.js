const rolSchema = require("../../models/rol");

const createRol = async (req, res) => {
  const rol = rolSchema(req.body);

  try {
    const rolCreated = await rol.save();
    if (rolCreated) {
      res.json(rolCreated);
    }
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = createRol;
