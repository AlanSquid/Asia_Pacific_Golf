const userController = {
  getIndex: (req, res, next) => {
    res.render('index', { name: "Alan", balance: 150000, point: 2500 })
  },

  getReservation: (req, res, next) => {
    res.render('reservation')
  },

  getReservationBooking: (req, res, next) => {
    res.render('booking', { name: 'Alan' })
  },

  getNewBooking: (req, res, next) => {
    res.render('new-booking')
  },

  postNewBooking: (req, res, next) => {

  },

  getReservationChecks: (req, res, next) => {
    res.render('checks', { name: 'Alan' })
  },

  getNewChecks: (req, res, next) => {
    res.render('new-checks')
  },

  postNewChecks: (req, res, next) => {

  },

  getMemberArea: (req, res, next) => {
    res.render('members')
  },
  getMemberOrders: (req, res, next) => {
    res.render('orders', { name: 'Alan ' })
  },

  getMemberBookedOrder: (req, res, next) => {
    res.render('booked-orders', { name: 'Alan' })
  },
  getMemberLogs: (req, res, next) => {
    res.render('details', { name: 'Alan', balance: 15000 })
  },

  getMemberGifts: (req, res, next) => {
    res.render('gifts', { balance: 15000, gift: 2 })
  }

}

module.exports = userController