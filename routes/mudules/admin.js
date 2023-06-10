const express = require('express')
const router = express.Router()
const adminController = require('../../controllers/admin-controller')

router.get('/', adminController.getAdminIndex)
router.get('/booking', adminController.getAdminBooking)
router.get('/checks', adminController.getAdminChecks)
router.get('/orders', adminController.getAdminOrders)
router.get('/booked-orders', adminController.getAdminBookedOrders)
router.get('/details', adminController.getAdminDetails)
router.get('/summary', adminController.getAdminSummary)
router.get('/members-info', adminController.getAdminMembers)
router.get('/members-info/new', adminController.getNewMember)
router.get('/coursies', adminController.getAdminCoursies)
router.get('/logs', adminController.getAdminLogs)

module.exports = router