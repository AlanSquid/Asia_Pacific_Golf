const express = require('express')
const router = express.Router()
const reservationController = require('../../controllers/reservation-controller')

router.get('/', reservationController.getReservation)
router.get('/booking', reservationController.getReservationBooking)
router.get('/booking/add', reservationController.getAddBooking)
router.post('/booking/add', reservationController.postAddBooking)
router.get('/checks', reservationController.getReservationChecks)
router.get('/checks/add', reservationController.getAddChecks)
router.post('/checks/add', reservationController.postAddChecks)

module.exports = router