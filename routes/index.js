const express = require('express')
const router = express.Router()

const home = require('./mudules/home')
const members = require('./mudules/members')
const reservations = require('./mudules/reservations')
const admin = require('./mudules/admin')
const auth = require('./mudules/auth')

const { authenticator, adminAuthenticator } = require('../middleware/auth')

router.use('/admin', adminAuthenticator, admin)
router.use('/members', authenticator, members)
router.use('/reservations', authenticator, reservations)
router.use('/auth', auth)
router.use('/', authenticator, home)


module.exports = router