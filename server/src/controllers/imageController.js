const Image = require('../models/imageModel')
const fs = require('fs')
const path = require('path')

exports.uploadImage = (req, res) => {
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
    console.log(req.body.code)

    Image.find({code: req.body.code}, (err, image) => {
        if (err) {
            res.send({ message: "An error occured while trying to get the image", err})
        } else {
            try {
                var valid_image = image[0].img.data.toString('base64')
                res.send({image: valid_image})
            } catch(error) {
                res.send({ image: null})
            }  
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

exports.deleteImageByCode = (req, res) => {
    Image.deleteOne({code: req.body.code}, (err, image) => {
        if (err) {
            res.status(500).send("Delete image of event " + image.code +  " failed", err)
        } else {
            res.send({message: "Delete image of event " + image.code +  " successful"})
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