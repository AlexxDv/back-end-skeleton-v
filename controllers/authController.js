const authController = require("express").Router();

authController.get("/register", (req, res) => {
    //TODO replace with actual view by assignment

  res.render("register", { title: "Register Page" });
});

authController.post("/register", (req, res) => {
  console.log(req.body);
  res.redirect("/auth/register");
});


module.exports = authController;