const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
// const JwtStrategy = require('passport-jwt').Strategy
// const ExtractJwt = require('passport-jwt').ExtractJwt
const models = require('../models')
const User = models.User

module.exports = app => {
  // 初始化passport模組
  app.use(passport.initialize())
  app.use(passport.session())

  // 設置本地登入策略
  passport.use(new LocalStrategy({
    usernameField: 'account',
  },
    (account, password, done) => {
      User.findOne({ where: { account } })
        .then(user => {
          if (!user) {
            return done(null, false, { message: 'That account is not registered!' })
          }
          return done(null, user)
        })
        .catch(err => done(err, false))
    }))

  // 設置JWT登入策略

  // const opts = {}
  // opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  // opts.secretOrKey = 'secret';
  // opts.issuer = 'accounts.examplesoft.com';
  // opts.audience = 'yoursite.net';
  // passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
  //   User.findOne({ id: jwt_payload.sub })
  //     .then(user => {
  //       if (!user) {
  //         return done(null, false, { message: 'That account is not registered!' })
  //       }
  //       return done(null, user);
  //     })
  //     .catch(err => done(err, false))
  // }))



  // 設定序列化與反序列化
  passport.serializeUser((user, done) => {
    done(null, user.id)
  })
  passport.deserializeUser((id, done) => {
    User.findByPk(id)
      .then(user => {
        user = user.toJSON()
        done(null, user)
      })
      .catch(err => done(err, null))
  })
}

