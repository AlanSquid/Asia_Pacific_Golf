const models = require('../models')
const User = models.User

const userController = {
  // 首頁
  getIndex: (req, res, next) => {
    const userId = req.user.id
    User.findByPk(userId)
      .then(user => {
        res.render('index', { name: user.name, balance: user.balance, point: user.point })
      })
  },
  // 我要預約
  getReservation: (req, res, next) => {
    res.render('reservation')
  },
  // 協助訂場
  getReservationBooking: (req, res, next) => {
    const userId = req.user.id
    User.findByPk(userId)
      .then(user => {
        res.render('booking', { name: user.name })
      })
  },
  // 新增訂場
  getNewBooking: (req, res, next) => {
    res.render('new-booking')
  },

  postNewBooking: (req, res, next) => {

  },
  // 已訂場需結帳
  getReservationChecks: (req, res, next) => {
    const userId = req.user.id
    User.findByPk(userId)
      .then(user => {
        res.render('checks', { name: user.name })
      })
  },
  // 新增已訂場需結帳
  getNewChecks: (req, res, next) => {
    res.render('new-checks')
  },

  postNewChecks: (req, res, next) => {

  },
  // 會員專區
  getMemberArea: (req, res, next) => {
    res.render('members')
  },
  // 訂場紀錄
  getMemberOrders: (req, res, next) => {
    const userId = req.user.id
    User.findByPk(userId)
      .then(user => {
        res.render('orders', { name: user.name })
      })
  },
  // 未擊球預約
  getMemberBookedOrder: (req, res, next) => {
    const userId = req.user.id
    User.findByPk(userId)
      .then(user => {
        res.render('bookedOrders', { name: user.name })
      })
  },
  // 擊球及扣款明細
  getMemberDetails: (req, res, next) => {
    const userId = req.user.id
    User.findByPk(userId)
      .then(user => {
        res.render('details', { name: user.name })
      })
  },
  // 會員好禮
  getMemberGifts: (req, res, next) => {
    const userId = req.user.id
    User.findByPk(userId)
      .then(user => {
        res.render('gifts', { balance: user.balance, gift: user.gift })
      })
  }

}

module.exports = userController