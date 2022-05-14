const userRoutes = require("./user");

const allRouters = (app) => {
  app.use("/api", userRoutes);
};

module.exports = allRouters;
