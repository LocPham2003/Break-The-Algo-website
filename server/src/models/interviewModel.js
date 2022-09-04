const mongoose = require("mongoose")
const dotenv = require('dotenv')
dotenv.config({path : './.env'})
const Schema = mongoose.Schema

const interviewSchema = new Schema({
    code: String,
    availability: String,
    company: String,
    interviewee: String,
    role: String,
    contactInfo: String,
    status: String
})

module.exports = mongoose.model("Interview", interviewSchema)
