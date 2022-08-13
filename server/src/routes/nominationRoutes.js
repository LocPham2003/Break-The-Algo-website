const express = require('express')
const { nominationCreate, getNominations } = require('../controllers/nominationController')
const router = express.Router()

router.post('/nominationCreate', nominationCreate)

router.get('/getNominations', getNominations)

module.exports = router