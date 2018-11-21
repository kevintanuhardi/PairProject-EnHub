const routes = require('express').Router();
const Model = require("../models");

routes.get("/signup", (req,res) =>{
    res.render("./pages/users/signUpForm")
})

routes.post("/signup",(req,res) =>{
    // res.send(req.body)
    Model.User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        company_name: req.body.company_name
    })
    .then((data) =>{
        res.redirect("/")
    })
    .catch((err) =>
        res.send(err))
})

routes.get("/signin", (req,res) =>{
    res.render("./pages/users/signInForm")
})


module.exports = routes;