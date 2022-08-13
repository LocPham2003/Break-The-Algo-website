const mongoose = require("mongoose")
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const Schema = mongoose.Schema

const nominationSchema = new Schema({
    name: String,
    studyMajor: String,
    // CV
    // fileName: Data_Type?
    description: String
})

module.exports = mongoose.model("Nomination", nominationSchema)