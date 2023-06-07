const memberController = {
  getLogin: (req, res, next) => {
    res.render('login')
  },

  getIndex: (req, res, next) => {
    res.render('index', { name: "Alan", balance: 150000, point: 2500 })
  },

  getMemberArea: (req, res, next) => {
    res.render('members')
  },
  getMemberOrders: (req, res, next) => {
    res.render('orders', { name: 'Alan ' })
  },

  getMemberBooked: (req, res, next) => {
    res.render('booked-orders')
  },
  getMemberLogs: (req, res, next) => {
    res.render('logs')
  },

  getMemberGifts: (req, res, next) => {
    res.render('gifts')
  },

  getReservation: (req, res, next) => {
    res.render('reservation')
  },

  getReservationBooking: (req, res, next) => {

    res.render('booking', { name: 'Alan' })
  },

  getAddBooking: (req, res, next) => {
    res.render('add-booking')
  },

  postAddBooking: (req, res, next) => {

  },

  getReservationChecks: (req, res, next) => {
    res.render('checks')
  },

  getAddChecks: (req, res, next) => {
    res.render('add-checks')
  },

  postAddChecks: (req, res, next) => {

  },

}

module.exports = memberController