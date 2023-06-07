const express = require('express')
const router = express.Router()

const home = require('./mudules/home')
const members = require('./mudules/members')
const reservations = require('./mudules/reservations')

const { authenticator } = require('../middleware/auth')

router.use('/', home)
router.use('/members', members)
router.use('/reservations', reservations)

module.exports = router;