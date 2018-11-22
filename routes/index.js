const routes = require('express').Router();
const TalentsRoutes = require("./talentRoutes.js")
const UserRoutes = require("./userRoutes.js")

routes.get("/", (req,res) => {
    res.render("pages/home.ejs", {msg: req.query.msg})
})

routes.get("/signin", (req,res) =>{
    res.render("pages/signin.ejs")
})

routes.get("/signup", (req,res) =>{
    res.render("pages/signup.ejs")
})

routes.get("/logout", (req,res) =>{
    req.session.destroy(function(err) {
        res.send(err)
    })

    message = "You successfully logged out"

    res.redirect(`/?msg=${message}`)
})


routes.use("/talents", TalentsRoutes)
routes.use("/users", UserRoutes)

module.exports = routes;