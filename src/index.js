require("./database");
require("dotenv").config();

const express = require("express");
const swaggerUiExpress = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerSpec = require("./swagger");
const middlewares = require("./routes");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// middlewares
middlewares(app);

//Uses
app.use(
  "/api-doc",
  swaggerUiExpress.serve,
  swaggerUiExpress.setup(swaggerJsDoc(swaggerSpec))
);

app.listen(port, () => console.log(`server listening on port ${port}`));
