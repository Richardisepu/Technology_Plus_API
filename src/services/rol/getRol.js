const rolSchema = require("../../models/rol");

const getRol = async (req, res) => {
  const { id } = req.params;

  try {
    const rol = await rolSchema.find({ _id: id });
    if (rol) res.json(rol);
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = getRol;
