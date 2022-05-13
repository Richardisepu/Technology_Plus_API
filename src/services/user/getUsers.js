const userSchema = require("../../models/user");

const getUsers = async (req, res) => {
  try {
    const users = await userSchema.find();
    if (users) res.json(users);
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = getUsers;
