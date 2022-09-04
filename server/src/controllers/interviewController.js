const Interview = require("../models/interviewModel")

exports.scheduleInterview = (req, res) => {
    const body = req.body;

    const interview = new Interview(body);
    //Randomly generate the id of the interview
    interview.code = "iv" + Math.random().toString(16).slice(2)
    var token = req.cookies.accessToken
    if (!token) {
        return res.json({
            message: "Illegal request, please login"
        })
    } else {
        interview.save((err, interview) => {
            if (err) {
                return res.status(400).json({error: "Unable to schedule the interview, please contact the board member"})
            } else {
                return res.json({
                    message: "Successfully scheduled an interview. If the selected interviewer accept your request, they will contact you via discord to discuss further details."
                })
            }
        })
    }
}

exports.updateInterviewScheduleStatus = (req, res) => {
    const code = req.body.code
    const status = req.body.status

    Interview.findOneAndUpdate({ code: code }, { status: status }, function (err, docs) {
        if (err) {
            res.status(400).json({
                message: "Update interview gone wrong"
            })		
            console.log("Something happened")
        } else {
            console.log(docs)
            res.json({ message: "Updated the status of the interview with " + docs.interviewee})
        }
    })
}

exports.deleteInterview = (req, res) => {
    const code = req.body.code

    Interview.deleteOne({ code: code }, function(err, docs){
        if (err) {
            res.status(400).json({
                message: "Delete interview gone wrong"
            })		
            console.log("Something happened")
        } else {
            res.json({ message: "Interview is marked as done and now is deleted from the database"})
        }
    })
}

exports.getInterviewerSchedule = (req, res) => {
    Interview.find({}, function (err, docs) {
        if (err){
            res.status(400).json({
                message: "Get interview list gone wrong"
            })		
            console.log("Something happened")
        }
        else{
            res.send(docs)
        }
    });
}

exports.getIntervieweeSchedule = (req, res) => {
    const interviewee = req.body.interviewee

    Interview.find({ interviewee: interviewee }, function(err, docs) {
        if (err) {
            res.status(400).json({
                message: "Get interviewee list gone wrong"
            })
        } else {
            res.send(docs)
        }
    })
}