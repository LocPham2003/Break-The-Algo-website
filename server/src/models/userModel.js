const mongoose = require("mongoose")
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    studyMajor: String,
    studyYear: String,
    username: String,
    password: String,
    passwordReEntry: String,
    email: String
})

module.exports = mongoose.model("User", userSchema)