const express = require('express')
const { user_signup, user_signin } = require('../controllers/userController')
const router = express.Router()

router.post('/signup', user_signup)

router.post('/signin', user_signin)

module.exports = router