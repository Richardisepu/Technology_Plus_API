require("./database");
require("dotenv").config();

const express = require("express");
const swaggerUiExpress = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerSpec = require("./swagger");
const middlewares = require("./routes");
const cors = require("cors");
const adminBro = require("./adminBro");

const app = express();
const port = process.env.PORT || 3000;

// Response Json
app.use(express.json());

// middlewares
middlewares(app);

//AdminBro
adminBro(app);

//CORS
app.get("/cors", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.send({ msg: "This has CORS enabled 🎈" });
});

app.use(
  cors({
    origin: "*",
  })
);

//Uses
app.use(
  "/api-doc",
  swaggerUiExpress.serve,
  swaggerUiExpress.setup(swaggerJsDoc(swaggerSpec))
);

// Listen
app.listen(port, () => console.log(`server listening on port ${port}`));
