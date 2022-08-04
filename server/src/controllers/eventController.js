const Event = require("../models/eventModel.js")

exports.eventCreate = (req, res) => {
    const body = req.body;
    const username = req.username;
    
    Event.findOne({username: username }, function (err, docs) {
        if (err){
            console.log("Something happened")
        } else {
            if (docs === null) {
                const event = new Event(body);
                event.save((err, event) => {
                    if (err) {
                        return res.status(400).json({
                            error: "Unable to add event"
                        })
                    } else {
                        return res.json({
                            message: "Event " + event.name + " has been added"
                        })
                    }
                })
            } 
        }
    });
}

// Need to make this function so that it append a new user object into the participants array 
exports.eventSignup = (req, res) => {
    const body = req.body;
    const username = req.username;
    
    Event.findOne({username: username }, function (err, docs) {
        if (err){
            console.log("Something happened")
        } else {
            if (docs === null) {
                const event = new Event(body);
                event.save((err, event) => {
                    if (err) {
                        return res.status(400).json({
                            error: "Unable to add event"
                        })
                    } else {
                        return res.json({
                            message: "Event " + event.name + " has been added"
                        })
                    }
                })
            } 
        }
    });
}