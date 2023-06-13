const express = require('express')
const router = express.Router()
const userController = require('../../controllers/user-controller')

router.get('/', userController.getMemberArea)
router.get('/orders', userController.getMemberOrders)
router.get('/booked-orders', userController.getMemberBookedOrder)
router.get('/details', userController.getMemberDetails)
router.get('/gifts', userController.getMemberGifts)


module.exports = router
