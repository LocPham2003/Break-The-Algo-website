const express = require('express')
const { userSignup, userSignin, isLoggedIn, userSignout } = require('../controllers/userController')
const router = express.Router()

router.post('/signup', userSignup)

router.post('/signin', userSignin)

router.get('/isLoggedIn', isLoggedIn)

router.get('/signout', userSignout)
 
module.exports = router