const Event = require("../models/eventModel.js")

exports.eventCreate = (req, res) => {
    const body = req.body;
    
    const event = new Event(body);
    event.save((err, event) => {
        if (err) {
            return res.status(400).json({
                error: "Unable to add event"
            })
        } else {
            return res.json({
                message: "Event " + event.title + " has been added"
            })
        }
    })
}

// Need to make this function so that it append a new user object into the participants array 
exports.eventRegister = (req, res) => {
    const body = req.body;

    // When signing up for an event, we want to get these following information:
    // The name of the participant
    // The studyMajor of the participant
    // The eventTitle for searching
    const code = body.code;

    Event.findOneAndUpdate({code: code}, {$push: {participants: {name: body.name, studyMajor: body.studyMajor}}}, function (err, docs) {
        if (err){
            console.log("Something wrong happened");
        } else {
            return res.json({ message: "Successfully registered for the " + docs.title});
        }
    });
}

exports.eventDeregister = (req, res) => {
    const body = req.body;

    // When signing up for an event, we want to get these following information:
    // The name of the participant
    // The studyMajor of the participant
    // The eventTitle for searching
    const title = body.title;

    Event.findOneAndUpdate({title: title}, {$pull: {participants: {name: body.name, studyMajor: body.studyMajor}}}, function (err, docs) {
        if (err){
            console.log("Something wrong happened")
        } else {
            return res.json({ message: "Successfully deregistered for the " + docs.title})
        }
    });
}

exports.eventList = (req, res) => {
    Event.find({}, function (err, docs) {
        if (err){
            res.status(400).json({
                message: "Something happened"
            })		
            console.log("Something happened")
        }
        else{
            res.send(docs)
        }
    });
}