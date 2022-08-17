const express = require('express')
const { scheduleInterview, getInterviewerSchedule, getIntervieweeSchedule, updateInterviewScheduleStatus, deleteInterview } = require('../controllers/interviewController')
const router = express.Router()

router.post('/scheduleInterview', scheduleInterview)
router.post('/updateInterviewScheduleStatus', updateInterviewScheduleStatus)
router.post('/getInterviewerSchedule', getInterviewerSchedule)
router.post('/deleteInterview', deleteInterview)
router.post('/getIntervieweeSchedule', getIntervieweeSchedule)

module.exports = router