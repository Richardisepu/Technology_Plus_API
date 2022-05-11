const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/technology-plus-db");

mongoose.connection.on("open", () => console.log("Database is conneted"));

mongoose.connection.on("error", (error) => console.log(error));
