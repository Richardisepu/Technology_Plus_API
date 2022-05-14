const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  nameCategory: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Category", categorySchema);