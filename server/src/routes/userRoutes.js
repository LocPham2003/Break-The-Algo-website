const express = require('express')
const { userSignup, userSignin, userState, userSignout } = require('../controllers/userController')
const router = express.Router()

router.post('/signup', userSignup)

router.post('/signin', userSignin)

router.get('/userState', userState)

router.get('/signout', userSignout)
 
module.exports = router