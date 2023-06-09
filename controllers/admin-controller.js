const adminController = {
  getAdminIndex: (req, res, next) => {
    res.render('admin-index', { name: 'Alan' })
  },
  getAdminBooking: (req, res, next) => {
    res.render('booking', { name: 'Alan' })
  },
  getAdminChecks: (req, res, next) => {
    res.render('checks', { name: 'Alan' })
  },
  getAdminOrders: (req, res, next) => {
    res.render('orders', { name: 'Alan' })
  },
  getAdminBookedOrders: (req, res, next) => {
    res.render('booked-orders', { name: 'Alan' })
  },
  getAdminDetails: (req, res, next) => {
    res.render('details', { name: 'Alan' })
  },
  getAdminSummary: (req, res, next) => {
    res.render('summary', { name: 'Alan' })
  },
  getAdminMembersInfo: (req, res, next) => {
    res.render('members-info', { name: 'Alan' })
  },
  getAdminCoursies: (req, res, next) => {
    res.render('coursies', { name: 'Alan' })
  },
  getAdminLogs: (req, res, next) => {
    res.render('logs', { name: 'Alan' })
  },
}

module.exports = adminController