const express = require('express')
const { eventSignup } = require('../controllers/eventController')
const router = express.Router()

router.post('/eventSignup', eventSignup)

module.exports = router