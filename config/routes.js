const authController = require("../controllers/authController");
const homeController = require("../controllers/homeController");

module.exports = (app) => {
  app.use("/", homeController);
  app.use("/auth", authController);

  // Global error handler
  app.get("/error", (req, res, next) => {
    throw new Error("propagating error");
  });

  app.use((err, req, res, next) => {
    console.log("Global error handler");
    console.log(err.message);
    res.redirect("/");
  });
};
