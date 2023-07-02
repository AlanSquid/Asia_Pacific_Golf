const express = require('express')
const router = express.Router()
const adminController = require('../../controllers/admin-controller')

// Admin首頁
router.get('/', adminController.getAdminIndex)
// GET協助訂場頁面
router.get('/booking', adminController.getBookingPage)
// 獲取協助訂場的table資料
router.get('/api/get_booking', adminController.getBookingDatas)
// 查看訂場名單
router.get('/api/get_booking_list', adminController.getBookingList)

// GET新增訂場頁面
router.get('/booking/new', adminController.getNewBookingPage)
// POST新增訂場
router.post('/booking', adminController.postNewBooking)

// GET修改訂場頁面
router.get('/booking/:id/edit', adminController.getEditBookingPage)
// PUT修改訂場
router.put('/booking/:id', adminController.putBooking)
// DELETE刪除訂場
router.delete('/booking/:id', adminController.deleteBooking)

// 已訂場需結帳
router.get('/check', adminController.getCheckPage)
router.get('/check/new', adminController.getNewCheckPage)
router.get('/check/edit', adminController.getEditCheckPage)

// 擊球及扣款明細
router.get('/details', adminController.getDetailsPage)
router.get('/details/new', adminController.getNewDetailsPage)
router.get('/details/edit', adminController.getEditDetailsPage)

// 會員好禮
router.get('/gifts', adminController.getGiftsPage)
router.get('/gifts/new', adminController.getNewGiftPage)
router.get('/gifts/edit', adminController.getEditGiftPage)

// 會員資訊
router.get('/members', adminController.getMembersPage)
router.get('/api/get_members', adminController.getMemberDatas)
// 新增
router.get('/members/new', adminController.getNewMemberPage)
router.post('/members', adminController.postNewMember)

// 查詢
router.get('/api/get_members', adminController.getMemberDatas)

// 修改
router.get('/members/:id/edit/', adminController.getEditMemberPage)
router.put('/members/:id/', adminController.putEditMember)
// 刪除
router.delete('/members/:id/', adminController.deleteMember)


// 球場資訊
router.get('/coursies', adminController.getCoursiesPage)
router.get('/coursies/new', adminController.getNewCoursePage)
router.get('/coursies/edit', adminController.getEditCoursePage)
// 會員logs
router.get('/logs', adminController.getLogsPage)

module.exports = router