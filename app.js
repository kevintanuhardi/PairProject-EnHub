"use strict"

const express = require("express");
const routes = require("./routes");
const session = require("express-session")

let app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(session({
    secret: "enhub",
    cookie: { secure: false }
}))

app.use(express.urlencoded({extended: false}));
app.use("/", routes);


app.listen(port, () =>{
    console.log("our website is running")
})