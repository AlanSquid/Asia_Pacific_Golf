const models = require('../models')
const User = models.User
const passport = require('passport')
const authController = {
  // 登入頁面
  getLoginPage: (req, res, next) => {
    res.render('login')
  },

  // 登入
  // login: (req, res, next) => {
  //   const { account } = req.body
  //   User.findOne({ where: { account } })
  //     .then(user => {
  //       if (!user) {
  //       }
  //     })
  // },

  // 判斷是會員還是管理員
  memberOrAdmin: (req, res, next) => {
    if (req.user.isAdmin) {
      res.redirect('/admin')
    }
    res.redirect('/')
  },

  // 登出
  logout: (req, res, next) => {
    req.logout(err => {
      if (err) { return next(err) }
      res.redirect('/auth/login')
    })
  }

}

module.exports = authController