const express = require('express')
const router = express.Router()
const passport = require('passport')

const authController = require('../../controllers/auth-controller')

router.get('/login', authController.getLoginPage)

router.post('/login', passport.authenticate('local', {
  failureRedirect: '/auth/login'
}),
  authController.memberOrAdmin
)
// router.post('/login', authController.login)

// 登出
router.post('/logout', authController.logout)

module.exports = router