const routes = require('express').Router();
const Model = require("../models")
const helpers = require("../helpers/index")


routes.get("/", (req,res) =>{
    let startInd = 0
    if(req.query.page){
        startInd = (req.query.page-1) *5
    }
    Model.Talent.findAll(
        {offset: startInd, limit: 5}
        )
    .then((data) =>{
        let newData = data.map((element) =>{
            let result = {
                id: element.id,
                name: element.name,
                email: element.email,
                handphone: element.handphone,
                social_media: element.social_media,
                skills: element.skills,
                status: element.status,
                price: element.price,
                rating: element.rating
            }

            return result
        })
        let input = {
            data: newData,
            msg: req.query.msg
        }

        Model.Talent.findAll()
        .then((data) =>{
            input.totalData = data.length

            // res.send(input)
            res.render("pages/talents/list.ejs", input)
        })


    })
    .catch(err => res.send(err))
})

routes.get("/signin", (req,res) =>{
    res.render("./pages/talents/signInForm", {msg: req.query.msg})
})

routes.post("/signin", (req,res) =>{
    Model.Talent.findOne({where:{
        email: req.body.email
    }})
    .then((data) =>{
        if(helpers.checkPassword(req.body.password, data.password)){
            let message ="signed in"
            req.session.user ={
                id: data.id,
                name: data.name,
                role: "talent"
            }
            console.log(req.session)
            res.redirect(`/talents/signin?msg=${message}`)
        }
        else{
            let message ="salah password"
            res.redirect(`/talents/signin?msg=${message}`)
        }
    })
    .catch((err) =>{
        let message ="salah email"
        res.redirect(`/talents/signin?msg=${message}`)
    })
})

routes.get("/signup", (req,res) =>{
    res.render("./pages/talents/signUpForm", {msg: req.query.msg})
})

routes.post("/signup",(req,res) =>{
    // res.send(req.body)
    Model.Talent.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        handphone: req.body.handphone,
        social_media: req.body.social_media,
        skills: req.body.skills,
        status: req.body.status,
        price: req.body.price,
    })
    .then((data) =>{
        let message = "You successfully registered"
        res.redirect(`/?msg=${message}`)
    })
    .catch((err) =>
        res.send(err))
})

routes.get("/transactions", (req,res) =>{


    Model.Transaction.findAll({
        where:{
            TalentId: req.session.user.id
        },
        include:[{
            model : Model.User
        }]
    })
    .then((data) =>{
        // res.send(data)
        let input = {
            data: data,
            msg: req.query.msg
        }
        res.render("./pages/talents/transactions", input)
    })
    //   res.send({ id: req.session.user.id})
})



module.exports = routes;