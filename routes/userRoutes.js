const routes = require('express').Router();
const Model = require("../models");
const helpers = require("../helpers/index")
const nodemailer = require("nodemailer")

let smtpConfig = {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
        user: 'entrepreneurhub57@gmail.com',
        pass: 'enhub12345'
    }
};


const transporter = nodemailer.createTransport(smtpConfig)

transporter.verify(function(error, success) {
    if (error) {
         console.log(error);
    } else {
         console.log('Server is ready to take our messages');
    }
 });


routes.get("/signup", (req,res) =>{
    res.render("./pages/users/signUpForm", {msg: req.query.msg})
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
        let message = "You successfully registered"
        res.redirect(`/?msg=${message}`)
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
            // console.log(req.session)
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

routes.get("/:TalentId/hire", function(req,res,next){
    if(req.session.user === undefined){
        let message = "You have to sign in first"
        res.redirect(`/talents?msg=${message}`)
    }
    else if(req.session.user.role !== "user"){
        let message = "You have to sign in as Business owner to hire"
        res.redirect(`/talents?msg=${message}`)
    }
    next()
}
    ,function(req,res){


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


        let email = {
            from: 'entrepreneurhub57@gmail.com',
            to: `${data.email}`,
            subject: 'New Project on EnHub',
            text: 'Visit your page on Enhub for more detail',
        };

        // transporter.sendMail(email, function(err, info) {
        //     console.log("masuk")
            res.redirect(`/talents?msg=${message}`)
        // })

    })
    .catch((err) =>{
        let message = "There is some error";
        
        res.redirect(`/talents?msg=${message}`)
    })
})

routes.get("/transactions", (req,res) =>{


    Model.Transaction.findAll({
        where:{
            UserId: req.session.user.id
        },
        include:[{
            model : Model.Talent
        }]
    })
    .then((data) =>{
        // res.send(data)
        let input = {
            data: data,
            msg: req.query.msg
        }
        res.render("./pages/users/transactions", input)
    })
    //   res.send({ id: req.session.user.id})
})

routes.post("/transactions/:transactionId", (req,res) =>{
    // res.send(req.body)
    Model.Transaction.update({
        Rating: req.body.rating
    },{
        where:{
            id: req.params.transactionId
        }
    })
    .then(()=>{
        let message = "You successfully rate this talent"
        res.redirect(`/users/transactions?msg=${message}`)
    })
    .catch((err) =>{
        res.redirect(`/transactions?msg=${err}`)
    })
})





module.exports = routes;