const express = require('express')
const { eventCreate, eventRegister, eventDeregister, eventList, signedupEventList } = require('../controllers/eventController')
const router = express.Router()

router.post('/eventRegister', eventRegister)
router.post('/eventDeregister', eventDeregister)
router.post('/eventCreate', eventCreate)
router.post('/signedupEventList', signedupEventList)
router.get('/eventList', eventList)

module.exports = router