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