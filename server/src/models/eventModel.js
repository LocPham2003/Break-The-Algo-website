const mongoose = require("mongoose")
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const Schema = mongoose.Schema

const eventSchema = new Schema({
    code: String,
    title: String,
    // Add an image property here soon
    startTime: String,
    endTime: String,
    startMonth: String,
    startDate: String,
    location: String,
    description: String,
    participants: [{
        name: String,
        studyMajor: String
    }]
})

module.exports = mongoose.model("Event", eventSchema)