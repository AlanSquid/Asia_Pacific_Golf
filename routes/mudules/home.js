const express = require('express')
const router = express.Router()
const memberController = require('../../controllers/member-controller')

router.get('/', memberController.getIndex)
router.get('/login', memberController.getLogin)


module.exports = router