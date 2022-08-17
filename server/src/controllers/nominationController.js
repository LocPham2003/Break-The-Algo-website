const Nomination = require("../models/nominationModel.js")

exports.nominationCreate = (req, res) => {
    const body = req.body;

    const nomination = new Nomination(body)
    nomination.code =  "nn" + Math.random().toString(16).slice(2)

    nomination.save((err, nomination) => {
        if (err) {
            return res.status(400).json({
                error: "Unable to add nomination"
            })
        } else {
            return res.json({
                message: "Nomination of " + nomination.nominee + " has been added! The admin team will review and respond to your request"
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

exports.updateNomination = (req, res) => {
    const code = req.body.code
    const status = req.body.status
    const reason = req.body.reason
    
    Nomination.findOneAndUpdate({ code: code }, { status: status, reason: reason }, function(err, docs) {
        if (err) {
            res.status(400).json({
                message: "Update nomination gone wrong"
            })	
        } else {
            res.json({ message: "Updated the status of nomination for member " + docs.nominee})
        }
    })
}

exports.getPendingNomination = (req, res) => {
    const nominator = req.body.nominator
    const reason = req.body.reason
    Nomination.find({ nominator: nominator }, function(err, docs) {
        if (err) {
            res.status(400).json({
                message: "Find pending nomination gone wrong"
            })
        } else {
            res.send(docs)
        }
    })
}

