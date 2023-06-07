var express = require('express');
var router = express.Router();
const memberController = require('../controllers/member-controller')

router.get('/', memberController.getMember)
router.get('/login', memberController.login)
router.get('/areas', memberController.getMemberArea)
router.get('/areas/orders', memberController.getMemberorders)
router.get('/areas/booked-orders', memberController.getMemberBooked)
router.get('/areas/logs', memberController.getMemberLogs)
router.get('/areas/gifts', memberController.getMemberGifts)
router.get('/reservations', memberController.getReservation)
router.get('/reservations/booking', memberController.getReservationBooking)
router.get('/reservations/booking/add', memberController.getAddBooking)
router.post('/reservations/booking/add', memberController.postAddBooking)
router.get('/reservations/checks', memberController.getReservationChecks)
router.get('/reservations/checks/add', memberController.getAddChecks)
router.post('/reservations/checks/add', memberController.postAddChecks)
module.exports = router;
