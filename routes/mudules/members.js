const express = require('express')
const router = express.Router()
const memberController = require('../../controllers/member-controller')

router.get('/', memberController.getMemberArea)
router.get('/orders', memberController.getMemberOrders)
router.get('/booked-orders', memberController.getMemberBooked)
router.get('/logs', memberController.getMemberLogs)
router.get('/gifts', memberController.getMemberGifts)


module.exports = router
