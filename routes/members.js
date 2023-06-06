var express = require('express');
var router = express.Router();
const memberController = require('../controllers/member-controller')

router.get('/', memberController.getMember)
router.get('/login', memberController.login)
router.get('/areas', memberController.getMemberArea)
router.get('/areas/histories', memberController.getReservationHistories)
router.get('/areas/noHit', memberController.getNoHitReservations)
router.get('/areas/details', memberController.getDetails)
router.get('/areas/gifts', memberController.getMemberGifts)
router.get('/reservations', memberController.getReservation)
router.get('/reservations/assist', memberController.getReservationAssist)
router.get('/reservations/checks', memberController.getReservationChecks)
module.exports = router;
