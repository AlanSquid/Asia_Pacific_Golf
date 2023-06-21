const { Op } = require("sequelize")
const sequelize = require('sequelize')
const models = require('../models')
const User = models.User
const Class = models.Class


const adminController = {
  // GET Admin首頁
  getAdminIndex: (req, res, next) => {
    res.render('admin-index')
  },
  // GET協助訂場頁面
  getBookingPage: (req, res, next) => {
    res.render('admin-booking')
  },
  // GET新增協助訂場頁面
  getNewBookingPage: (req, res, next) => {
    res.render('admin-new-booking')
  },
  // GET修改訂場頁面
  getEditBookingPage: (req, res, next) => {
    res.render('admin-edit-booking')
  },
  // GET已訂場需結帳頁面
  getCheckPage: (req, res, next) => {
    res.render('admin-check')
  },
  // GET新增結帳頁面
  getNewCheckPage: (req, res, next) => {
    res.render('admin-new-check')
  },
  // GET修改結帳頁面
  getEditCheckPage: (req, res, next) => {
    res.render('admin-edit-check')
  },
  // GET擊球及扣款明細頁面
  getAdminDetailsPage: (req, res, next) => {
    res.render('admin-details')
  },
  // GET新增擊球及扣款明細頁面
  getNewDetailsPage: (req, res, next) => {
    res.render('admin-new-details')
  },
  // GET修改擊球及扣款明細頁面
  getEditDetailsPage: (req, res, next) => {
    res.render('admin-edit-details')
  },
  // GET會員好禮頁面
  getGiftPage: (req, res, next) => {
    res.render('admin-gifts')
  },
  // GET新增會員好禮頁面
  getNewGiftPage: (req, res, next) => {
    res.render('admin-new-gifts')
  },
  // GET修改會員好禮頁面
  getEditGiftPage: (req, res, next) => {
    res.render('admin-edit-gifts')
  },
  // GET會員資訊頁面
  getMembersPage: (req, res, next) => {
    res.render('admin-members')
  },
  // API 回傳會員資料
  getMemberDatas: (req, res, next) => {
    const pagesize = Number(req.query.length)
    const start = Number(req.query.start)

    User.findAndCountAll({
      where: {
        isAdmin: false,
      },
      include: {
        model: Class,
        attributes: ['name']
      },
      limit: [start, pagesize],
      order: [['id', 'DESC']],
      raw: true,
      nest: true
    })
      .then(users => {
        const recordsTotal = users.count
        const recordsFiltered = users.count
        const resultData = users.rows.map(user => ({
          member_id: user.member_id,
          name: user.name,
          account: user.account,
          isMale: user.isMale ? "男" : "女",
          member_since: user.member_since,
          member_expire: user.member_expire,
          ClassId: user.Class.name,
          text: user.text,
          id: user.id,
        }))

        const output = {
          draw: req.query.draw,
          recordsTotal,
          recordsFiltered,
          data: resultData
        }

        res.json(output)
      })
  },

  // GET新增會員資訊頁面
  getNewMemberPage: (req, res, next) => {
    res.render('admin-new-member')
  },

  // POST新增會員
  postNewMember: (req, res, next) => {
    const {
      member_id, name,
      account,
      isMale,
      member_since,
      member_expire,
      member_class,
      text
    } = req.body

    // 錯誤訊息處理
    const formErrors = []
    // 姓名帳號為必填
    if (!name || !account) {
      formErrors.push({ message: '姓名、帳號為必填欄位!' })
    }
    if (formErrors.length) {
      return res.render('admin-new-member', { formErrors })
    }
    User.findOne({ where: { account } })
      .then(user => {
        if (user) {
          formErrors.push({ message: '此帳號已存在，請重新輸入帳號！' })
          return res.render('admin-new-member', {
            formErrors,
            account: null,
          })
        }
        User.create({
          member_id, name,
          account,
          isMale,
          member_since,
          member_expire,
          class: member_class,
          text
        })
          .then(() => res.redirect('/admin/members'))
      })
      .catch(err => console.log(err))
  },
  // GET修改會員資訊頁面
  getEditMemberPage: (req, res, next) => {
    const id = req.params.id
    User.findByPk(id, {
      include: { model: Class, attributes: ['name'] },
      raw: true,
      nest: true
    })
      .then(user => {
        res.render('admin-edit-member', { user })
      })
  },
  // PUT修改會員資訊
  putEditMember: (req, res, next) => {
    const id = req.params.id
    const {
      member_id, name,
      account,
      isMale,
      member_since,
      member_expire,
      member_class,
      text
    } = req.body

    User.findByPk(id)
      .then(user => {
        // 錯誤處理
        const formErrors = []
        // 姓名帳號為必填
        if (!name || !account) {
          formErrors.push({ message: '姓名、帳號為必填欄位!' })
        }
        if (formErrors.length) {
          return res.render('admin-edit-member', { formErrors, user })
        }
        User.findOne({
          where: {
            [Op.and]: [
              { account },
              { id: { [Op.ne]: id } }
            ]
          }
        })
          .then(sameUser => {
            if (sameUser) {
              formErrors.push({ message: '此帳號已存在，請重新輸入帳號！' })
              return res.render('admin-edit-member', {
                formErrors,
                user
              })
            }
            User.update(req.body, { where: { id } })
              .then(() => res.redirect('/admin/members'))
          })
      })
      .catch(err => console.log(err))
  },

  // DELETE刪除會員
  deleteMember: (req, res, next) => {
    const id = req.params.id
    User.findByPk(id)
      .then(user => {
        user.destroy()
        res.redirect('/admin/members')
      })
  },

  // GET球場資訊頁面
  getAdminCoursiesPage: (req, res, next) => {
    res.render('admin-coursies')
  },
  // GET新增球場資訊頁面
  getNewCoursePage: (req, res, next) => {
    res.render('admin-new-course')
  },
  // GET修改球場資訊頁面
  getEditCoursePage: (req, res, next) => {
    res.render('admin-edit-course')
  },
  getAdminLogs: (req, res, next) => {
    res.render('admin-logs')
  },
}

module.exports = adminController