const Image = require('../models/imageModel')
const fs = require('fs')
const path = require('path')

exports.uploadImage = (req, res) => {
    console.log(req.body.code)

    var obj = {
        code: req.body.code,
        img: {
            data: fs.readFileSync(path.join('../server/uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
    }

    Image.create(obj, (err, item) => {
        if (err) {
            console.log(err)
        } else {
            item.save()
        }
    })
}

exports.findImageByCode = (req, res) => {
    Image.find({code: req.body.code}, (err, image) => {
        if (err) {
            res.status(500).send("Cannot get image by code", err)
        } else {
            res.send({image: image[0].img.data.toString('base64')})
        }
    })
}

exports.updateImageByCode = (req, res) => {
    var img = {
        data: fs.readFileSync(path.join('../server/uploads/' + req.file.filename)),
        contentType: 'image/png'
    }

    Image.findOneAndUpdate({ code: req.body.code}, { img: img }, (err, image) => {
        if (err) {
            res.status(500).send("Fail to update image")
        } else {
            console.log("Update image with code: " + image.code + " successful")
            res.send({message : "Update image with code: " + image.code + " successful"})
        }
    })
}

exports.getImage = (req, res) => {
    Image.find({}, (err, image) => {
        if (err) {
            res.status(500).send("Cannot fetch all images", err)
        } else {
            var images = []
            for (var i = 0; i < image.length; i++) {
                images.push({
                    code: image[i].code,
                    data: image[i].img.data.toString('base64')
                })
            }
            res.send({ images })
        }
    })
} 