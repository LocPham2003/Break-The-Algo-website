const mongoose = require("mongoose")
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    studyMajor: String,
    studyYear: String,
    username: String,
    role: String,
    password: String,
    passwordReEntry: String,
    email: String,
    events: [{
        code: String
    }]
})

module.exports = mongoose.model("User", userSchema)