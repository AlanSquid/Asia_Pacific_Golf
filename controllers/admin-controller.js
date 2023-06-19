const { Op } = require("sequelize")
const models = require('../models')
const User = models.User
const Class = models.Class


const adminController = {
  // Admin首頁
  getAdminIndex: (req, res, next) => {
    res.render('admin-index')
  },
  // 協助訂場
  getAdminBooking: (req, res, next) => {
    res.render('admin-booking')
  },
  // 新增協助訂場
  getAdminNewBooking: (req, res, next) => {
    res.render('admin-new-booking')
  },
  // 修改訂場
  getAdminEditBooking: (req, res, next) => {
    res.render('admin-edit-booking')
  },
  // 已訂場需結帳
  getAdminChecks: (req, res, next) => {
    res.render('admin-checks')
  },
  // 新增結帳
  getAdminNewChecks: (req, res, next) => {
    res.render('admin-new-checks')
  },
  // 修改結帳
  getAdminEditChecks: (req, res, next) => {
    res.render('admin-edit-checks')
  },
  // 訂場紀錄
  getAdminOrders: (req, res, next) => {
    res.render('admin-orders')
  },
  // 新增訂場紀錄
  getAdminNewOrders: (req, res, next) => {
    res.render('admin-new-orders')
  },
  // 修改訂場紀錄
  getAdminEditOrders: (req, res, next) => {
    res.render('admin-edit-orders')
  },
  // 未擊球預約
  getAdminBookedOrders: (req, res, next) => {
    res.render('amdin-bookedOrders')
  },
  // 新增未擊球預約
  getAdminNewBookedOrders: (req, res, next) => {
    res.render('amdin-new-bookedOrders')
  },
  // 修改未擊球預約
  getAdminEditBookedOrders: (req, res, next) => {
    res.render('amdin-edit-bookedOrders')
  },
  // 擊球及扣款明細
  getAdminDetails: (req, res, next) => {
    res.render('admin-details')
  },
  // 新增擊球及扣款明細
  getAdminNewDetails: (req, res, next) => {
    res.render('admin-new-details')
  },
  // 修改擊球及扣款明細
  getAdminEditDetails: (req, res, next) => {
    res.render('admin-edit-details')
  },
  // 會員好禮
  getAdminGift: (req, res, next) => {
    res.render('admin-gifts')
  },
  // 新增會員好禮
  getAdminNewGift: (req, res, next) => {
    res.render('admin-new-gifts')
  },
  // 修改會員好禮
  getAdminEditGift: (req, res, next) => {
    res.render('admin-edit-gifts')
  },
  // 預約資訊整理(總表)
  getAdminSummary: (req, res, next) => {
    res.render('summary')
  },
  // 新增預約資訊整理
  getAdminNewSummary: (req, res, next) => {
    res.render('new-summary')
  },
  // 修改預約資訊整理
  getAdminEditSummary: (req, res, next) => {
    res.render('edit-summary')
  },
  // 會員資訊頁面
  getAdminMembers: (req, res, next) => {
    res.render('members-info')
    // User.findAll({
    //   where: { isAdmin: false },
    //   include: {
    //     model: Class,
    //     attributes: ['name']
    //   },
    //   limit: 10,
    //   order: [['id', 'DESC']],
    //   raw: true,
    //   nest: true
    // })
    //   .then(users => {
    //     users.data = users
    //     res.render('members-info', { users })
    //   })
  },

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
        const resultData = []
        users.rows.forEach(user => {
          resultData.push({
            member_id: user.member_id,
            name: user.name,
            account: user.account,
            isMale: user.isMale ? "男" : "女",
            member_since: user.member_since,
            member_expire: user.member_expire,
            ClassId: user.Class.name,
            text: user.text,
            id: user.id,
          })
        })
        const output = {
          draw: req.query.draw,
          recordsTotal,
          recordsFiltered,
          data: resultData
        }
        res.json(output)
      })
  },


  // 新增會員資訊頁面
  getNewMember: (req, res, next) => {
    res.render('new-member')
  },

  // 新增會員
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
      return res.render('new-member', { formErrors })
    }
    User.findOne({ where: { account } })
      .then(user => {
        if (user) {
          formErrors.push({ message: '此帳號已存在，請重新輸入帳號！' })
          return res.render('new-member', {
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
          .then(() => res.redirect('/admin/members-info'))
      })
      .catch(err => console.log(err))
  },
  // 修改會員資訊頁面
  getEditMember: (req, res, next) => {
    const id = req.params.id
    User.findByPk(id, {
      include: { model: Class, attributes: ['name'] },
      raw: true,
      nest: true
    })
      .then(user => {
        res.render('edit-member', { user })
      })
  },
  // 修改會員資訊
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
          return res.render('edit-member', { formErrors, user })
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
              return res.render('edit-member', {
                formErrors,
                user
              })
            }
            User.update(req.body, { where: { id } })
              .then(() => res.redirect('/admin/members-info'))
          })
      })
      .catch(err => console.log(err))
  },

  // 刪除會員
  deleteMember: (req, res, next) => {
    const id = req.params.id
    User.findByPk(id)
      .then(user => {
        user.destroy()
        res.redirect('/admin/members-info')
      })
  },

  // 球場資訊
  getAdminCoursies: (req, res, next) => {
    res.render('coursies')
  },
  // 新增球場資訊
  getNewCoursies: (req, res, next) => {
    res.render('new-course')
  },
  // 修改球場資訊
  getEditCoursies: (req, res, next) => {
    res.render('edit-course')
  },
  getAdminLogs: (req, res, next) => {
    res.render('logs')
  },
}

module.exports = adminController