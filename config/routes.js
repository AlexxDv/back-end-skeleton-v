const homeController = require("../controllers/homeController")

module.exports = (app) => {
    app.user('/', homeController)
}