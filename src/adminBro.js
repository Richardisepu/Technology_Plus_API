const adminBro = (app) => {
  const AdminBro = require("admin-bro");
  const expressAdminbro = require("@admin-bro/express");
  const mongooseAdminbro = require("@admin-bro/mongoose");
  const Brand = require("./models/brand");

  const Category = require("./models/category");
  const Order = require("./models/order");
  const Product = require("./models/product");
  const User = require("./models/user");

  AdminBro.registerAdapter(mongooseAdminbro);

  const AdminBroOptions = {
    resources: [Brand, Category, Order, Product, User],
  };

  const adminBro = new AdminBro(AdminBroOptions);

  const router = expressAdminbro.buildRouter(adminBro);

  app.use(adminBro.options.rootPath, router);
};

module.exports = adminBro;
