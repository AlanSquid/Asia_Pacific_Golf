var express = require('express');
var router = express.Router();
const memberController = require('../controllers/member-controller')

router.get('/', memberController.getMember)
router.get('/login', memberController.login)
router.get('/areas', memberController.getMemberArea)
router.get('/reservations', memberController.getReservation)
router.get('/reservations/assist', memberController.getReservationAssist)
router.get('/reservations/checks', memberController.getReservationChecks)
module.exports = router;
