const contactSchema = require("../../models/contact");

const getContacts = async (req, res) => {
  try {
    const contacts = await contactSchema.find();
    if (contacts) res.json(contacts);
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = getContacts;
