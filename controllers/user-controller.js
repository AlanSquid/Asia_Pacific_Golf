const models = require('../models')
const User = models.User

const userController = {
  // GET首頁
  getIndex: (req, res, next) => {
    const userId = req.user.id
    User.findByPk(userId)
      .then(user => {
        res.render('index', { name: user.name, balance: user.balance, point: user.point })
      })
  },
  // GET我要預約頁面
  getReservationPage: (req, res, next) => {
    res.render('reservation')
  },
  // GET協助訂場頁面
  getBookingPage: (req, res, next) => {
    const userId = req.user.id
    User.findByPk(userId)
      .then(user => {
        res.render('booking', { name: user.name })
      })
  },
  // GET新增訂場頁面
  getNewBookingPage: (req, res, next) => {
    res.render('new-booking')
  },
  // POST新增訂場
  postNewBooking: (req, res, next) => {

  },
  // GET已訂場需結帳頁面
  getCheckPage: (req, res, next) => {
    const userId = req.user.id
    User.findByPk(userId)
      .then(user => {
        res.render('check', { name: user.name })
      })
  },
  // GET新增已訂場需結帳頁面
  getNewCheckPage: (req, res, next) => {
    res.render('new-check')
  },
  // POST新增已訂場需結帳
  postNewCheck: (req, res, next) => {

  },
  // GET會員專區頁面
  getMemberAreaPage: (req, res, next) => {
    res.render('members')
  },
  // GET擊球紀錄頁面
  getBookingRecordsPage: (req, res, next) => {
    const userId = req.user.id
    User.findByPk(userId)
      .then(user => {
        res.render('booking-records', { name: user.name })
      })
  },

  // GET會員錢包頁面
  getMemberDetailsPage: (req, res, next) => {
    const userId = req.user.id
    User.findByPk(userId)
      .then(user => {
        res.render('details', { name: user.name, balance: user.balance })
      })
  },
  // GET會員好禮頁面
  getMemberGiftsPage: (req, res, next) => {
    const userId = req.user.id
    User.findByPk(userId)
      .then(user => {
        res.render('gifts', { point: user.point, gift: user.gift })
      })
  }
}

module.exports = userController