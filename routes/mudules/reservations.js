const express = require('express')
const router = express.Router()
const userController = require('../../controllers/user-controller')

router.get('/', userController.getReservation)
router.get('/booking', userController.getReservationBooking)
router.get('/booking/new', userController.getNewBooking)
router.post('/booking', userController.postNewBooking)
router.get('/checks', userController.getReservationChecks)
router.get('/checks/new', userController.getNewChecks)
router.post('/checks', userController.postNewChecks)

module.exports = router