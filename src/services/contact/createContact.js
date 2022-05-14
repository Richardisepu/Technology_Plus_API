const contactSchema = require("../../models/contact");

const createContact = async (req, res) => {
  const contact = contactSchema(req.body);

  try {
    const contactCreated = await contact.save();
    if (contactCreated) {
      res.json(contactCreated);
    }
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = createContact;
