// 檢查是否為登入狀態
module.exports = {
  authenticator: (req, res, next) => {
    if (req.isAuthenticated() && (!req.user.isAdmin)) {
      return next()
    }
    req.flash('warning_msg', '使用前請登入！')
    res.redirect('/auth/login')
  },
  adminAuthenticator: (req, res, next) => {
    if (req.isAuthenticated() && req.user.isAdmin) {
      return next()
    }
    req.flash('warning_msg', '使用前請登入！')
    res.redirect('/auth/login')
  },
}