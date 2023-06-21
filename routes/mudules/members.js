const express = require('express')
const router = express.Router()
const userController = require('../../controllers/user-controller')

// 會員專區
router.get('/', userController.getMemberAreaPage)
// 擊球紀錄
router.get('/booking-records', userController.getBookingRecordsPage)
// 會員錢包
router.get('/details', userController.getMemberDetailsPage)
// 會員好禮
router.get('/gifts', userController.getMemberGiftsPage)

module.exports = router
