const routes = require('express').Router();
const Model = require("../models")


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



module.exports = routes;