const swaggerSpec = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Node Mongo Api",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:" + process.env.PORT || 3000,
      },
    ],
  },
  apis: [],
};

module.exports = swaggerSpec;
