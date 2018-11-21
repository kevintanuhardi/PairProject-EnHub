"use strict"

const express = require("express");
const routes = require("./routes");

let app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.urlencoded({extended: false}));
app.use("/", routes);

app.listen(port, () =>{
    console.log("our website is running")
})