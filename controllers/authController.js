const { parseError } = require("../util/parser");

const authController = require("express").Router();

authController.get("/register", (req, res) => {
  //TODO replace with actual view by assignment

  res.render("register", { title: "Register Page" });
});

authController.post("/register", async (req, res) => {
  try {
    if (req.body.username == "" || req.body.password == "") {
      throw new Error("Please fill out all fields");
    }

    if (req.body.password != req.body.repass) {
      throw new Error("Passwords do not match");
    }

    const token = await register(req.body.username, req.body.password);

    //TODO check assignment to see if register creates session
    res.cookie("token", token);
    res.redirect("/"); //TODO replace with redirect view by assignment
  } catch (error) {
    console.log(error);
    const errors = parseError(error);

    //TODO add error display to actual templpate from assignment
    res.render("register", {
      title: "Register Page",
      errors,
      body: {
        username: req.body.username,
      },
    });
  }
});

authController.get("/login", (req, res) => {
  res.render("login", { title: "Login Page" });
});

authController.post("/login", async (req, res) => {
  try {
    const token = await login(req.body.username, req.body.password);

    res.cookie("token", token);
    res.redirect("/"); //TODO replace with redirect view by assignment
  } catch (error) {
    const errors = parseError(error);
    res.render("login", {
      title: "Login Page",
      errors,
      body: {
        username: req.body.username,
      },
    });
  }
});
module.exports = authController;