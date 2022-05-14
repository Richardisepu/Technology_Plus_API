const express = require("express");
const router = express.Router();

const createContactService = require("../../services/contact/createContact");
const getContacts = require("../../services/contact/getContacts");
const getContact = require("../../services/contact/getContact");

router.post("/create-contact", (req, res) => {
  createContactService(req, res);
});

router.get("/contacts", (req, res) => {
  getContacts(req, res);
});

router.get("/contact/:id", (req, res) => {
  getContact(req, res);
});

module.exports = router;
