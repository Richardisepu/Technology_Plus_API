const rolSchema = require("../../models/rol");

const getRoles = async (req, res) => {
  try {
    const roles = await rolSchema.find();
    if (roles) res.json(roles);
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = getRoles;
