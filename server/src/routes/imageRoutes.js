const multer = require('multer')
const express = require('express')
const { uploadImage, getImage, findImageByCode, updateImageByCode, deleteImageByCode } = require('../controllers/imageController')
const router = express.Router()

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({storage: storage})

router.post('/uploadImage', upload.single('image'), uploadImage)
router.post('/updateImageByCode', upload.single('image'), updateImageByCode)
router.post('/deleteImageByCode', deleteImageByCode)
router.post('/findImageByCode', findImageByCode)
router.get('/getImage', getImage)

module.exports = router

