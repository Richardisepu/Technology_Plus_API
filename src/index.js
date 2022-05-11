const express = require("express");
const swaggerUiExpress = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerSpec = require("./swagger");
require("./database");

const app = express();

const PORT = process.env.PORT || 3000;

//Uses
app.use(
  "/api-doc",
  swaggerUiExpress.serve,
  swaggerUiExpress.setup(swaggerJsDoc(swaggerSpec))
);

app.get("/", (req, res) => {
  res.send("welcome to my API");
});

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
