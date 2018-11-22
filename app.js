"use strict"

const express = require("express");
const routes = require("./routes");
const session = require("express-session")



let app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static('uploads'))
app.use(session({
    secret: "enhub",
    cookie: { secure: false }
}))

app.use(function(req, res, next){
    // console.log(req.session)
    res.locals.session = req.session;

    // console.log(" sessions ===> ",res.locals.session)
    //res.locals.authenticated = ! req.user.anonymous;
    next();
  });

app.use(express.urlencoded({extended: false}));
app.use("/", routes);


app.listen(port, () =>{
    console.log("our website is running")
})