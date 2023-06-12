const authController = {
  getLoginPage: (req, res, next) => {
    res.render('login')
  },

  // login: (req, res, next) => {
  //   try {
  //     const token = jwt.sign(req.user, process.env.JWT_SECRET, { expiresIn: '30d' })
  //     res.render('/')
  //   } catch (err) {
  //     next(err)
  //   }
  // },

  logout: (req, res, next) => {
    req.logout()
    rediret('/auth/login')
  }

}

module.exports = authController