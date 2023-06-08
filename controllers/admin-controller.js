const adminController = {
  getAdminIndex: (req, res, next) => {
    res.render('admin-index', { name: 'Alan' })
  },
  getAdminBooking: (req, res, next) => {
    res.render('admin-booking', { name: 'Alan' })
  },

}

module.exports = adminController