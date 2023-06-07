const express = require('express')
const router = express.Router()
const memberController = require('../../controllers/member-controller')

router.get('/', memberController.getReservation)
router.get('/booking', memberController.getReservationBooking)
router.get('/booking/add', memberController.getAddBooking)
router.post('/booking/add', memberController.postAddBooking)
router.get('/checks', memberController.getReservationChecks)
router.get('/checks/add', memberController.getAddChecks)
router.post('/checks/add', memberController.postAddChecks)

module.exports = router