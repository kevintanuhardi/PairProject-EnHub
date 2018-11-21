const routes = require('express').Router();
const Model = require("../models");
const helpers = require("../helpers/index")

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
    res.render("./pages/users/signInForm", {msg: req.query.msg})
})

routes.post("/signin", (req,res) =>{
    Model.User.findOne({where:{
        email: req.body.email
    }})
    .then((data) =>{
        if(helpers.checkPassword(req.body.password, data.password)){
            let message ="signed in"
            req.session.user ={
                id: data.id,
                name: data.name,
                role: "user"
            }
            console.log(req.session)
            res.redirect(`/users/signin?msg=${message}`)
        }
        else{
            let message ="salah password"
            res.redirect(`/users/signin?msg=${message}`)
        }
    })
    .catch((err) =>{
        let message ="salah email"
        res.redirect(`/users/signin?msg=${message}`)
    })
})

routes.get("/:TalentId/hire", (req,res) =>{
    if(req.session.user === undefined){
        let message = "You have to sign in first"
        res.redirect(`/talents?msg=${message}`)
    }

    Model.Talent.findByPk(req.params.TalentId)
    .then((data) =>{
        // res.send(data)
        let input ={
            data: data
        }
        res.render("./pages/talents/detail", input)
    })
    .catch((err) => res.send(err))

    
})

routes.post("/:TalentId/hire", (req,res) =>{
    Model.Transaction.create({
        UserId: req.session.user.id,
        TalentId: req.params.TalentId
    })
    .then((data) =>{
        let message = "You successfully hired this person";

        res.redirect(`/talents?msg=${message}`)
    })
    .catch((err) =>{
        let message = "There is some error";
        
        res.redirect(`/talents?msg=${message}`)
    })
})


module.exports = routes;