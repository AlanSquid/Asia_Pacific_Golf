const express = require('express')
const router = express.Router()
const memberController = require('../../controllers/member-controller')

router.get('/', memberController.getReservation)
router.get('/booking', memberController.getReservationBooking)
router.get('/booking/new', memberController.getNewBooking)
router.post('/booking', memberController.postNewBooking)
router.get('/checks', memberController.getReservationChecks)
router.get('/checks/new', memberController.getNewChecks)
router.post('/checks', memberController.postNewChecks)

module.exports = router