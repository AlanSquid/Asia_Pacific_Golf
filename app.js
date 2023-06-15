var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressLayouts = require('express-ejs-layouts')
const usePassport = require('./config/passport')
const session = require('express-session')
const flash = require('connect-flash')
const methodOverride = require('method-override')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const routes = require('./routes')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts)
app.set('view engine', 'ejs');

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}))

app.use(methodOverride('_method'))
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

usePassport(app)

// flash的使用與設定
app.use(flash())
app.use((req, res, next) => {
  res.locals.member_id = req.body.member_id
  res.locals.name = req.body.name
  res.locals.account = req.body.account
  res.locals.isMale = req.body.isMale
  res.locals.member_since = req.body.member_since
  res.locals.member_expire = req.body.member_expire
  res.locals.member_class = req.body.member_class
  res.locals.text = req.body.text
  res.locals.isAuthenticated = req.isAuthenticated()
  res.locals.user = req.user
  res.locals.success_msg = req.flash('success_msg')  // 設定 success_msg 訊息
  res.locals.warning_msg = req.flash('warning_msg')  // 設定 warning_msg 訊息
  res.locals.login_error = req.flash('error') // 設定passport提供的錯誤提示訊息
  res.locals.formErrors = res.formErrors
  next()
})

app.use(routes)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
