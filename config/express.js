const publicFiles = require("express");
const handlebars = require("express-handlebars");
const cookieParser = require("cookie-parser");

// const express = require("express");
// const mongoose = require("mongoose");

module.exports = (app) => {
  const hbs = handlebars.create({
    extname: ".hbs",
  });
  app.engine("hbs", hbs.engine); 
  app.set("view engine", "hbs");

  app.use("/static", publicFiles.static("static"));
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
};
