const express = require('express')
const { userSignup, userSignin, userState, userSignout, userSignUpEvent, getUserListOfEvents, userDeregisterEvent, changePassword } = require('../controllers/userController')
const router = express.Router()

router.post('/signup', userSignup)
router.post('/signin', userSignin)
router.post('/userSignUpEvent', userSignUpEvent)
router.post('/getUserListOfEvents', getUserListOfEvents)
router.post('/userDeregisterEvent', userDeregisterEvent)
router.post('/changePassword', changePassword)
router.get('/userState', userState)
router.get('/signout', userSignout)
 
module.exports = router