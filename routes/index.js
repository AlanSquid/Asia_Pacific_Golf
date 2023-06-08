const express = require('express')
const router = express.Router()

const home = require('./mudules/home')
const members = require('./mudules/members')
const reservations = require('./mudules/reservations')
const admin = require('./mudules/admin')

const { authenticator } = require('../middleware/auth')

router.use('/', home)
router.use('/admin', admin)
router.use('/members', members)
router.use('/reservations', reservations)


module.exports = router