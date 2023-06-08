const reservationController = {
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

  }
}

module.exports = reservationController