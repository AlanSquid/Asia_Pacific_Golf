const adminController = {
  // Admin首頁
  getAdminIndex: (req, res, next) => {
    res.render('admin-index')
  },
  // 協助訂場
  getAdminBooking: (req, res, next) => {
    res.render('admin-booking')
  },
  // 新增協助訂場
  getAdminNewBooking: (req, res, next) => {
    res.render('admin-new-booking')
  },
  // 修改訂場
  getAdminEditBooking: (req, res, next) => {
    res.render('admin-edit-booking')
  },
  // 已訂場需結帳
  getAdminChecks: (req, res, next) => {
    res.render('admin-checks')
  },
  // 新增結帳
  getAdminNewChecks: (req, res, next) => {
    res.render('admin-new-checks')
  },
  // 修改結帳
  getAdminEditChecks: (req, res, next) => {
    res.render('admin-edit-checks')
  },
  // 訂場紀錄
  getAdminOrders: (req, res, next) => {
    res.render('admin-orders')
  },
  // 新增訂場紀錄
  getAdminNewOrders: (req, res, next) => {
    res.render('admin-new-orders')
  },
  // 修改訂場紀錄
  getAdminEditOrders: (req, res, next) => {
    res.render('admin-edit-orders')
  },
  // 未擊球預約
  getAdminBookedOrders: (req, res, next) => {
    res.render('amdin-bookedOrders')
  },
  // 新增未擊球預約
  getAdminNewBookedOrders: (req, res, next) => {
    res.render('amdin-new-bookedOrders')
  },
  // 修改未擊球預約
  getAdminEditBookedOrders: (req, res, next) => {
    res.render('amdin-edit-bookedOrders')
  },
  // 擊球及扣款明細
  getAdminDetails: (req, res, next) => {
    res.render('admin-details')
  },
  // 新增擊球及扣款明細
  getAdminNewDetails: (req, res, next) => {
    res.render('admin-new-details')
  },
  // 修改擊球及扣款明細
  getAdminEditDetails: (req, res, next) => {
    res.render('admin-edit-details')
  },
  // 會員好禮
  getAdminGift: (req, res, next) => {
    res.render('admin-gifts')
  },
  // 新增會員好禮
  getAdminNewGift: (req, res, next) => {
    res.render('admin-new-gifts')
  },
  // 修改會員好禮
  getAdminEditGift: (req, res, next) => {
    res.render('admin-edit-gifts')
  },
  // 預約資訊整理(總表)
  getAdminSummary: (req, res, next) => {
    res.render('summary')
  },
  // 新增預約資訊整理
  getAdminNewSummary: (req, res, next) => {
    res.render('new-summary')
  },
  // 修改預約資訊整理
  getAdminEditSummary: (req, res, next) => {
    res.render('edit-summary')
  },
  // 會員資訊
  getAdminMembers: (req, res, next) => {
    res.render('members-info')
  },
  // 新增會員資訊
  getNewMember: (req, res, next) => {
    res.render('new-member')
  },
  // 修改會員資訊
  getEditMember: (req, res, next) => {
    res.render('edit-member')
  },
  // 球場資訊
  getAdminCoursies: (req, res, next) => {
    res.render('coursies')
  },
  // 新增球場資訊
  getNewCoursies: (req, res, next) => {
    res.render('new-course')
  },
  // 修改球場資訊
  getEditCoursies: (req, res, next) => {
    res.render('edit-course')
  },
  getAdminLogs: (req, res, next) => {
    res.render('logs')
  },
  getNewMember: (req, res, next) => {
    res.render('new-member')
  },
}

module.exports = adminController