const express = require('express')
const router = express.Router()
const passport = require('passport')
const authController = require('../../controllers/auth-controller')
const User = require('../../models/user')

router.get('/login', authController.getLoginPage)

// 由passport處理登入驗證
router.post('/login', (req, res) => {
  User.findOne({ where: account })
    .then(user => {
      console.log(user)
    })
}
  // passport.authenticate('local', {
  //   successRedirect: '/',
  //   failureRedirect: '/auth/login',
  // })
)
// 登出
router.post('/logout', authController.logout)

module.exports = router