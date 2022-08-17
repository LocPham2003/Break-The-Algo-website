const mongoose = require("mongoose")
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const Schema = mongoose.Schema

const nominationSchema = new Schema({
    code: String,
    nominee: String,
    nominator: String,
    studyMajor: String,
    cvLink: String,
    description: String,
    status: String,
    reason: String
})

module.exports = mongoose.model("Nomination", nominationSchema)