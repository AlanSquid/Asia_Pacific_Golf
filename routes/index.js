const express = require('express')
const router = express.Router()
const memberController = require('../controllers/member-controller')

const home = require('./mudules/home')
const members = require('./mudules/members')
const reservations = require('./mudules/reservations')
const admin = require('./mudules/admin')

const { authenticator } = require('../middleware/auth')

router.get('/login', memberController.getLogin)
router.post('/login', memberController.getLogin)

router.use('/', home)
router.use('/admin', admin)
router.use('/members', members)
router.use('/reservations', reservations)


module.exports = router