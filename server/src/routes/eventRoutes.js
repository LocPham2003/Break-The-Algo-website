const express = require('express')
const { eventCreate, eventRegister, eventDeregister, eventList } = require('../controllers/eventController')
const router = express.Router()

router.post('/eventRegister', eventRegister)
router.post('/eventDeregister', eventDeregister)
router.post('/eventCreate', eventCreate)
router.get('/eventList', eventList)

module.exports = router