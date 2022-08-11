const express = require('express')
const { scheduleInterview, getInterviewSchedule } = require('../controllers/interviewController')
const router = express.Router()

router.post('/scheduleInterview', scheduleInterview)
router.post('/getInterviewSchedule', getInterviewSchedule)
module.exports = router