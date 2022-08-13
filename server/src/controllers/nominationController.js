const Nomination = require("../models/nominationModel.js")

exports.nominationCreate = (req, res) => {
    const body = req.body;

    const nomination = new Nomination(body)
    nomination.save((err, nomination) => {
        if (err) {
            return res.status(400).json({
                error: "Unable to add nomination"
            })
        } else {
            return res.json({
                message: "Nomination of " + nomination.name + " has been added! The admin team will review and respond to your request"
            })
        }
    })
}

exports.getNominations = (req, res) => {
    Nomination.find({}, function (err, docs) {
        if (err){
            res.status(400).json({
                message: "Get nomination list gone wrong"
            })		
            console.log("Something happened")
        }
        else{
            res.send(docs)
        }
    });
}