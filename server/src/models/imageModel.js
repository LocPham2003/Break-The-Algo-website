const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
    code: String, 
    img: {
        data: Buffer,
        contentType: String
    }
})

module.exports = new mongoose.model('image', imageSchema)