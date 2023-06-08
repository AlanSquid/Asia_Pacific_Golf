const express = require('express')
const router = express.Router()
const adminController = require('../../controllers/admin-controller')

router.get('/', adminController.getAdminIndex)
router.get('/booking', adminController.getAdminBooking)

module.exports = router