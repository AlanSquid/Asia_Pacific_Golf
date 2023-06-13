// 檢查是否為登入狀態
module.exports = {
  authenticator: (req, res, next) => {
    if (req.isAuthenticated() && (req.user.isAdmin === false)) {
      return next()
    }
    // req.flash('warning_msg', '請先登入才能使用！')
    res.redirect('/auth/login')
  },
  adminAuthenticator: (req, res, next) => {
    if (req.isAuthenticated() && req.user.isAdmin) {
      return next()
    }
    res.redirect('/auth/login')
  },
}