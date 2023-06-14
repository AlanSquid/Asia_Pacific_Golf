const express = require('express')
const router = express.Router()
const passport = require('passport')

const authController = require('../../controllers/auth-controller')

// 登入
router.get('/login', authController.getLoginPage)
router.post('/login', passport.authenticate('local', {
  failureRedirect: '/auth/login',
  failureFlash: true,
  badRequestMessage: '請重新輸入！',
}),
  authController.memberOrAdmin
)

// 登出
router.post('/logout', authController.logout)

module.exports = router