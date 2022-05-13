const userSchema = require("../../models/user");

const getUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await userSchema.find({ _id: id });
    if (user) res.json(user);
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = getUser;
