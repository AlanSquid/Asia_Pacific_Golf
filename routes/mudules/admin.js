const express = require('express')
const router = express.Router()
const adminController = require('../../controllers/admin-controller')

router.get('/', adminController.getAdminIndex)
// 協助訂場
router.get('/booking', adminController.getAdminBooking)
router.get('/booking/new', adminController.getAdminNewBooking)
router.get('/booking/edit', adminController.getAdminEditBooking)
// 已訂場需結帳
router.get('/checks', adminController.getAdminChecks)
router.get('/checks/new', adminController.getAdminNewChecks)
router.get('/checks/edit', adminController.getAdminEditChecks)
// 訂場紀錄
router.get('/orders', adminController.getAdminOrders)
router.get('/orders/new', adminController.getAdminNewOrders)
router.get('/orders/edit', adminController.getAdminEditOrders)
// 未擊球預約
router.get('/booked-orders', adminController.getAdminBookedOrders)
router.get('/booked-orders/new', adminController.getAdminNewBookedOrders)
router.get('/booked-orders/edit', adminController.getAdminEditBookedOrders)
// 擊球及扣款明細
router.get('/details', adminController.getAdminDetails)
router.get('/details/new', adminController.getAdminNewDetails)
router.get('/details/edit', adminController.getAdminEditDetails)
// 會員好禮
router.get('/gifts', adminController.getAdminGift)
router.get('/gifts/new', adminController.getAdminNewGift)
router.get('/gifts/edit', adminController.getAdminEditGift)
// 預約資訊整理(總表)
router.get('/summary', adminController.getAdminSummary)
router.get('/summary/new', adminController.getAdminNewSummary)
router.get('/summary/edit', adminController.getAdminEditSummary)
// 會員資訊
router.get('/members-info', adminController.getAdminMembers)
router.get('/members-info/new', adminController.getNewMember)
router.post('/members-info', adminController.postNewMember)
router.get('/members-info/:id/edit/', adminController.getEditMember)
router.put('/members-info/:id/', adminController.putEditMember)

// 球場資訊
router.get('/coursies', adminController.getAdminCoursies)
router.get('/coursies/new', adminController.getNewCoursies)
router.get('/coursies/edit', adminController.getEditCoursies)
// 會員logs
router.get('/logs', adminController.getAdminLogs)

module.exports = router