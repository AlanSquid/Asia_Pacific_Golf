const authController = {
  // 登入頁面
  getLoginPage: (req, res, next) => {
    res.render('login')
  },

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
      req.flash('success_msg', '已成功登出！')
      res.redirect('/auth/login')
    })
  }

}

module.exports = authController