const userRoutes = require("./user");
const brandRoutes = require("./brand");
const cartRoutes = require("./cart");
const categoryRoutes = require("./category");
const contactRoutes = require("./contact");
const methodRoutes = require("./method");
const orderRoutes = require("./order");
const productRoutes = require("./product");

const middlewares = (app) => {
  app.use("/api", userRoutes);
  app.use("/api", brandRoutes);
  app.use("/api", cartRoutes);
  app.use("/api", categoryRoutes);
  app.use("/api", contactRoutes);
  app.use("/api", methodRoutes);
  app.use("/api", orderRoutes);
  app.use("/api", productRoutes);
};

module.exports = middlewares;
