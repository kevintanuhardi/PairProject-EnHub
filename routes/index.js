const routes = require('express').Router();
const TalentsRoutes = require("./talentRoutes.js")
const UserRoutes = require("./userRoutes.js")

routes.get("/", (req,res) => {
    res.render("pages/home.ejs", {msg: req.query.msg})
})

routes.use("/talents", TalentsRoutes)
routes.use("/users", UserRoutes)

module.exports = routes;