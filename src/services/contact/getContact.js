const contactSchema = require("../../models/contact");

const getContact = async (req, res) => {
  const { id } = req.params;

  try {
    const contact = await contactSchema.findOne({ _id: id });
    if (contact) res.json(contact);
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = getContact;
