const routes = require('express').Router();
const Model = require("../models")


routes.get("/", (req,res) =>{
    Model.Talent.findAll()
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

        res.render("pages/talents/list.ejs", input)
    })
})



module.exports = routes;