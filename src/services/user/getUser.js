const userSchema = require("../../models/user");

const getUser = async (req, res) => {
  const { id, email } = req.query;

  try {
    const user = await userSchema.findOne({
      $or: [
        {
          _id: { $in: [id] },
        },
        {
          email: { $in: [email] },
        },
      ],
    });
    if (user) res.json(user);
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = getUser;
