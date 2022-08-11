const Interview = require("../models/interviewModel")

exports.scheduleInterview = (req, res) => {
    const body = req.body;

    const interview = new Interview(body);

    interview.save((err, interview) => {
        if (err) {
            return res.status(400).json({error: "Unable to schedule the interview, please contact the board member"})
        } else {
            return res.json({
                message: "Successfully scheduled an interview with " + interview.interviewer
            })
        }
    })
}

exports.getInterviewSchedule = (req, res) => {
    const interviewer = req.body.interviewer

    Interview.find({interviewer: interviewer}, function (err, docs) {
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