const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("open", () => console.log("Database is conneted"));

mongoose.connection.on("error", (error) => console.log(error));
