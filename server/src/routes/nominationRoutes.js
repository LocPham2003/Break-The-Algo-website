const express = require('express')
const { nominationCreate, getNominations, updateNomination, getPendingNomination } = require('../controllers/nominationController')
const router = express.Router()

router.post('/nominationCreate', nominationCreate)
router.post('/updateNomination', updateNomination)
router.post('/getPendingNominations', getPendingNomination)
router.get('/getNominations', getNominations)

module.exports = router