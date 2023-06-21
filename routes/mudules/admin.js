const express = require('express')
const router = express.Router()
const adminController = require('../../controllers/admin-controller')

// Admin首頁
router.get('/', adminController.getAdminIndex)

// 協助訂場
router.get('/booking', adminController.getBookingPage)
router.get('/booking/new', adminController.getNewBookingPage)
router.get('/booking/edit', adminController.getEditBookingPage)

// 已訂場需結帳
router.get('/check', adminController.getCheckPage)
router.get('/check/new', adminController.getNewCheckPage)
router.get('/check/edit', adminController.getEditCheckPage)

// 擊球及扣款明細
router.get('/details', adminController.getAdminDetailsPage)
router.get('/details/new', adminController.getNewDetailsPage)
router.get('/details/edit', adminController.getEditDetailsPage)

// 會員好禮
router.get('/gifts', adminController.getGiftPage)
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
router.get('/coursies', adminController.getAdminCoursiesPage)
router.get('/coursies/new', adminController.getNewCoursePage)
router.get('/coursies/edit', adminController.getEditCoursePage)
// 會員logs
router.get('/logs', adminController.getAdminLogs)

module.exports = router