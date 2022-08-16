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
            console.log("Find event to register gone wrong");
        } else {
            return res.json({ message: "Successfully registered for the " + docs.title});
        }
    });
}

exports.eventDeregister = (req, res) => {
    const body = req.body;

    // When deregister for an event, we want to get these following information:
    // The name of the participant
    // The studyMajor of the participant
    // The eventTitle for searching
    const code = body.code;

    Event.findOneAndUpdate({code: code}, {$pull: {participants: {name: body.name, studyMajor: body.studyMajor}}}, function (err, docs) {
        if (err){
            console.log("Find event to deregister gone wrong")
        } else {
            console.log("Successfully deregistered for the " + docs.title)
            return res.json({ message: "Successfully deregistered for the " + docs.title})
        }
    });
}

exports.eventList = (req, res) => {
    Event.find({}, function (err, docs) {
        if (err){
            res.status(400).json({
                message: "Get event list gone wrong"
            })		
            console.log("Something happened")
        }
        else{
            res.send(docs)
        }
    });
}

exports.signedupEventList = (req, res) => {
    Event.find({participants : {$elemMatch: {name: req.body.name}}}, function(err, docs) {
        if (err) {
            res.status(400).json({
                message: "Get sign up event gone wrong"
            })
        } else {
            res.send(docs)
        }
    })
}

exports.getEventByCode = (req, res) => {
    Event.findOne({code : req.body.code}, function(err, docs) {
        if (err) {
            res.status(400).json({
                message: "Get event by code gone wrong"
            })
        } else {
            return res.json({
                code: docs.code,
                title: docs.title,
                startTime: docs.startTime,
                endTime: docs.endTime,
                startMonth: docs.startMonth,
                startDate: docs.startDate,
                location: docs.location,
                description: docs.description
            })
        }
    })
}

exports.updateEvent = (req, res) => {
    const event = req.body;

    Event.findOneAndUpdate({code: req.body.code}, {
        title: event.title,
        description: event.description,
        startTime: event.startTime,
        endTime: event.endTime,
        startMonth: event.startMonth,
        startDate: event.startDate,
        location: event.location
    }, function (err, docs) {
        if (err){
            console.log("Find event to update gone wrong")
        } else {
            console.log("Successfully update event code: " + docs.code)
            return res.json({ message: "Successfully update event code: " + docs.code})
        }
    });
}

exports.deleteEvent = (req, res) => {
    const code = req.body.code;

    Event.deleteOne({code: code}, (err, event) => {
        if (err) {
            console.log("Unable to delete the event")
        } else {
            console.log("Successfully delete the event cdoe: " + event.code)
            return res.json({ message: "Successfully deleted the event"})
        }
    })
}