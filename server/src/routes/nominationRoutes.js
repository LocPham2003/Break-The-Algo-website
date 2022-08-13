const express = require('express')
const { nominationCreate } = require('../controllers/nominationController')
const router = express.Router()

router.post('/nominationCreate', nominationCreate)

module.exports = router