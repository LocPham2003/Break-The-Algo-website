const mongoose = require("mongoose")
const dotenv = require('dotenv')
dotenv.config({path : './.env'})
const Schema = mongoose.Schema

const interviewSchema = new Schema({
    date: String,
    time: String,
    company: String,
    interviewer: String,
    interviewee: String,
    role: String
})

module.exports = mongoose.model("Interview", interviewSchema)
