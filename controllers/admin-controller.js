const { Op } = require("sequelize")
const sequelize = require('sequelize')
const models = require('../models')
const User = models.User
const Course = models.Course
const BookingOrder = models.BookingOrder
const BookingState = models.BookingState
const moment = require('moment')

const adminController = {
  // GET Admin首頁
  getAdminIndex: (req, res, next) => {
    res.render('admin-index')
  },
  // GET協助訂場頁面
  getBookingPage: async (req, res, next) => {
    try {
      const coursies = await Course.findAll({ raw: true })
      const bookingStates = await BookingState.findAll({ raw: true })

      res.render('admin-booking', { coursies, bookingStates })
    } catch (err) { console.log(err) }
  },
  // 獲取協助訂場的table資料
  getBookingDatas: async (req, res, next) => {
    try {
      const pagesize = Number(req.query.length)
      const start = Number(req.query.start)
      let { memberId, name, course, team, contactPerson, state, startDate, endDate } = req.query
      // console.log('memberId', memberId)
      // console.log('name', name)
      // console.log('course', course)
      // console.log('startDate', startDate)
      // console.log('endDate', endDate)
      // console.log('team', team)
      // console.log('contactPerson', contactPerson)
      // console.log('state', state)

      // 關鍵字搜尋
      let searchFilter = {
        memberId: memberId.toLowerCase(),
        name: name.toLowerCase(),
        course: course === '所有球場' ? '%%' : course,
        team: team.toLowerCase(),
        contactPerson: contactPerson.toLowerCase(),
        state: state === '所有狀態' ? '%%' : state,
      }
      // 查兩日期之間
      if (startDate && endDate) {
        searchFilter.date = { [Op.between]: [startDate, endDate] }
        // 查該日期之後
      } else if (startDate && !endDate) {
        searchFilter.date = { [Op.gte]: startDate }
        // 查該日期之前
      } else if (endDate && !startDate) {
        searchFilter.date = { [Op.lte]: endDate }
        // 查全部日期
      } else {
        searchFilter.date = { [Op.all]: sequelize.literal('SELECT date') }
      }
      //findAndCountAll回傳rows跟count
      const orders = await BookingOrder.findAndCountAll({
        include: [{
          model: User,
          attributes: ['id', 'memberId', 'name'],
          where: {
            // 實現查詢不區分大小寫
            memberId: sequelize.where(sequelize.fn('LOWER', sequelize.col('member_id')), 'LIKE', `%${searchFilter.memberId}%`),
            name: sequelize.where(sequelize.fn('LOWER', sequelize.col('name')), 'LIKE', `%${searchFilter.name}%`)
          }
        },
        {
          model: Course,
          attributes: ['id', 'name'],
        },
        {
          model: BookingState,
          attributes: ['id', 'name'],
        }],
        // 排序，分頁
        limit: [start, pagesize],
        order: [['date', 'ASC']],
        raw: true,
        nest: true,
        where: {
          CourseId: { [Op.like]: searchFilter.course },
          date: searchFilter.date,
          team: sequelize.where(sequelize.fn('LOWER', sequelize.col('team')), 'LIKE', `%${searchFilter.team}%`),
          contactPerson: sequelize.where(sequelize.fn('LOWER', sequelize.col('contact_person')), 'LIKE', `%${searchFilter.contactPerson}%`),
          BookingStateId: { [Op.like]: searchFilter.state }
        }
      })
      // 傳去前端用的資料處理
      const recordsTotal = orders.count
      const recordsFiltered = orders.count
      const resultData = orders.rows.map(order => ({
        memberId: order.User.memberId,
        name: order.User.name,
        date: moment(order.date).format('YYYY/MM/DD'),
        course: order.Course.name,
        gameBeginStart: order.gameBeginStart ? moment(order.gameBeginStart).format('HH:mm') : null,
        gameBeginEnd: order.gameBeginEnd ? moment(order.gameBeginEnd).format('HH:mm') : null,
        team: order.team,
        group: order.group,
        bookingList: order.id,
        contactPerson: order.contactPerson,
        phone: order.phone,
        bookingState: order.BookingState.name,
        editAndDeleteBtn: order.id
      })).reverse()  // map處理陣列後用reverse()做排序

      const output = {
        draw: req.query.draw,
        recordsTotal,
        recordsFiltered,
        data: resultData
      }
      res.json(output)
    } catch (err) { console.log(err) }
  },
  // 查看訂場名單
  getBookingList: async (req, res, next) => {
    try {
      const id = req.query.id
      const order = await BookingOrder.findByPk(id)
      res.json(order.bookingList)
    } catch (err) { console.log(err) }
  },

  // GET新增協助訂場頁面
  getNewBookingPage: async (req, res, next) => {
    try {
      const coursies = await Course.findAll({ raw: true })
      const bookingStates = await BookingState.findAll({ raw: true })
      // 丟給ejs模板用的變數
      const { memberId, date, gameBeginStart, gameBeginEnd, CourseId, team, group, bookingList, contactPerson, phone, BookingStateId } = {}

      res.render('admin-new-booking', {
        coursies,
        bookingStates,
        CourseId,
        BookingStateId,
        memberId,
        date: moment(new Date()).format('YYYY-MM-DD'),
        gameBeginStart,
        gameBeginEnd,
        team,
        group,
        bookingList,
        contactPerson,
        phone,
        BookingStateId
      })
    } catch (err) { console.log(err) }
  },
  // POST新增訂場
  postNewBooking: async (req, res, next) => {
    try {
      const { memberId, CourseId, team, group, bookingList, contactPerson, phone, BookingStateId } = req.body
      let { date, gameBeginStart, gameBeginEnd } = req.body
      // 表單錯誤處理
      const formErrors = []
      // 會員編號與姓名為必填
      if (!memberId) {
        formErrors.push({ message: '會員編號為必填欄位!' })
      }
      // 球場為必填
      if (CourseId === '請選擇球場') {
        formErrors.push({ message: '球場為必填欄位!' })
      }
      // 日期為必填
      if (!date) {
        formErrors.push({ message: '日期為必填欄位!' })
      }
      // 會員編號驗證
      const user = await User.findOne({ where: { memberId } })
      if (memberId && !user) {
        formErrors.push({ message: '此會員編號不存在!' })
      }
      // 如果有錯誤直接return
      if (formErrors.length) {
        const coursies = await Course.findAll({ raw: true })
        const bookingStates = await BookingState.findAll({ raw: true })
        return res.render('admin-new-booking', {
          formErrors,
          memberId,
          date,
          gameBeginStart,
          gameBeginEnd,
          team,
          group,
          bookingList,
          contactPerson,
          phone,
          CourseId,
          BookingStateId,
          coursies,
          bookingStates
        })
      }
      await BookingOrder.create({
        UserId: user.id,
        date: moment(date).toDate(),
        gameBeginStart: gameBeginStart ? moment(`${date} ${req.body.gameBeginStart}`).toDate() : null,
        gameBeginEnd: gameBeginEnd ? moment(`${date} ${req.body.gameBeginEnd}`).toDate() : null,
        team,
        group: group ? group : null,
        bookingList,
        contactPerson,
        phone,
        CourseId: CourseId ? CourseId : null,
        BookingStateId,
      })
      res.redirect('/admin/booking')
    } catch (err) { console.log(err) }
  },
  // GET修改訂場頁面
  getEditBookingPage: async (req, res, next) => {
    try {
      const id = req.params.id
      const coursies = await Course.findAll({ raw: true })
      const bookingStates = await BookingState.findAll({ raw: true })
      const order = await BookingOrder.findByPk(id, {
        include: [{
          model: User,
          attributes: ['id', 'memberId', 'name'],
        },
        {
          model: Course,
          attributes: ['id', 'name'],
        },
        {
          model: BookingState,
          attributes: ['id', 'name'],
        }],
        raw: true,
        nest: true
      })

      res.render('admin-edit-booking', {
        id: order.id,
        memberId: order.User.memberId,
        name: order.User.name,
        date: order.date,
        gameBeginStart: moment(order.gameBeginStart).format('HH:mm'),
        gameBeginEnd: moment(order.gameBeginEnd).format('HH:mm'),
        team: order.team,
        group: order.group,
        bookingList: order.bookingList,
        contactPerson: order.contactPerson,
        phone: order.phone,
        CourseId: order.CourseId,
        BookingStateId: order.BookingStateId,
        coursies,
        bookingStates,
      })
    } catch (err) { console.log(err) }
  },
  // PUT修改訂單
  putBooking: async (req, res, next) => {
    try {
      const id = req.params.id
      const coursies = await Course.findAll({ raw: true })
      const bookingStates = await BookingState.findAll({ raw: true })
      const { memberId, name, CourseId, team, group, bookingList, contactPerson, phone, BookingStateId } = req.body
      let { date, gameBeginStart, gameBeginEnd } = req.body

      // 表單錯誤處理
      const formErrors = []
      // 會員編號與姓名為必填
      if (!memberId || !name) {
        formErrors.push({ message: '會員編號、姓名為必填欄位!' })
      }
      // 球場為必填
      if (CourseId === '請選擇球場') {
        formErrors.push({ message: '球場為必填欄位!' })
      }
      // 日期為必填
      if (!date) {
        formErrors.push({ message: '日期為必填欄位!' })
      }
      // 會員編號驗證
      const user = await User.findOne({ where: { memberId } })
      if (memberId && !user) {
        formErrors.push({ message: '此會員編號不存在!' })
      }
      if (name !== user.name) {
        formErrors.push({ message: '會員編號與姓名不匹配!' })
      }

      // 如果有錯誤直接return
      if (formErrors.length) {
        return res.render('admin-edit-booking', {
          formErrors,
          id,
          memberId,
          name,
          date,
          gameBeginStart,
          gameBeginEnd,
          team,
          group,
          bookingList,
          contactPerson,
          phone,
          CourseId,
          BookingStateId,
          coursies,
          bookingStates
        })
      }

      await BookingOrder.update({
        UserId: user.id,
        date: moment(date).toDate(),
        gameBeginStart: gameBeginStart ? moment(`${date} ${req.body.gameBeginStart}`).toDate() : null,
        gameBeginEnd: gameBeginEnd ? moment(`${date} ${req.body.gameBeginEnd}`).toDate() : null,
        team,
        group: group ? group : null,
        bookingList,
        contactPerson,
        phone,
        CourseId: CourseId ? CourseId : null,
        BookingStateId,
      }, { where: { id } })
      res.redirect('/admin/booking')
    } catch (err) { console.log(err) }
  },
  // DELETE訂場
  deleteBooking: async (req, res, next) => {
    try {
      const id = req.params.id
      const order = await BookingOrder.findByPk(id)
      order.destroy()
      res.redirect('/admin/booking')
    } catch (err) { console.log(err) }
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
  getDetailsPage: (req, res, next) => {
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
  getGiftsPage: (req, res, next) => {
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
  // table-會員資料
  getMemberDatas: async (req, res, next) => {
    const pagesize = Number(req.query.length)
    const start = Number(req.query.start)

    const users = await User.findAndCountAll({
      where: {
        isAdmin: false,
      },
      limit: [start, pagesize],
      order: [['id', 'DESC']],
      raw: true,
      nest: true
    })

    const recordsTotal = users.count
    const recordsFiltered = users.count
    const resultData = users.rows.map(user => ({
      memberId: user.memberId,
      name: user.name,
      account: user.account,
      gender: user.gender ? "男" : "女",
      memberSince: moment(user.memberSince).format('YYYY/MM/DD'),
      memberExpire: moment(user.memberExpire).format('YYYY/MM/DD'),
      membership: user.membership,
      description: user.description,
      editAndDeleteBtn: user.id,
    }))
    const output = {
      draw: req.query.draw,
      recordsTotal,
      recordsFiltered,
      data: resultData
    }
    res.json(output)
  },

  // GET新增會員資訊頁面
  getNewMemberPage: (req, res, next) => {
    res.render('admin-new-member')
  },

  // POST新增會員
  postNewMember: async (req, res, next) => {
    const {
      memberId, name,
      account,
      gender,
      memberSince,
      memberExpire,
      membership,
      description
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
    const user = await User.findOne({ where: { account } })
    if (user) {
      formErrors.push({ message: '此帳號已存在，請重新輸入帳號！' })
      return res.render('admin-new-member', {
        formErrors,
        account: null,
      })
    }
    await User.create({
      memberId,
      name,
      account,
      gender,
      memberSince,
      memberExpire,
      membership,
      description
    })
    res.redirect('/admin/members')

  },
  // GET修改會員資訊頁面
  getEditMemberPage: async (req, res, next) => {
    const id = req.params.id
    const user = await User.findByPk(id, { raw: true, })
    res.render('admin-edit-member', { user })
  },
  // PUT修改會員資訊
  putEditMember: async (req, res, next) => {
    const id = req.params.id
    const {
      memberId, name,
      account,
      gender,
      memberSince,
      memberExpire,
      membership,
      description
    } = req.body

    const user = await User.findByPk(id)
    // 表單錯誤處理
    const formErrors = []
    // 姓名帳號為必填
    if (!memberId || !name || !account) {
      formErrors.push({ message: '會員編號、姓名、帳號為必填欄位!' })
    }
    // 如果有錯誤直接return
    if (formErrors.length) {
      return res.render('admin-edit-member', { formErrors, user })
    }

    const sameUser = await User.findOne({
      where: {
        account,
        id: { [Op.ne]: id }
      }
    })

    if (sameUser) {
      formErrors.push({ message: '此帳號已存在，請重新輸入帳號！' })
      return res.render('admin-edit-member', { formErrors, user })
    }

    await User.update(req.body, { where: { id } })
    res.redirect('/admin/members')

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
  getCoursiesPage: (req, res, next) => {
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
  getLogsPage: (req, res, next) => {
    res.render('admin-logs')
  },
}

module.exports = adminController