const express = require('express')
const router = express.Router()
const userController = require('../../controllers/user-controller')

router.get('/', userController.getReservationPage)
router.get('/booking', userController.getBookingPage)
router.get('/booking/new', userController.getNewBookingPage)
router.post('/booking', userController.postNewBooking)
router.get('/check', userController.getCheckPage)
router.get('/check/new', userController.getNewCheckPage)
router.post('/check', userController.postNewCheck)

module.exports = router