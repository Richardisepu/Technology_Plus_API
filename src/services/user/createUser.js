const userSchema = require("../../models/user");

const createUser = async (req, res) => {
  const user = userSchema(req.body);

  try {
    const userCreated = await user.save();
    if (userCreated) {
      res.json(userCreated);
    }
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = createUser;
