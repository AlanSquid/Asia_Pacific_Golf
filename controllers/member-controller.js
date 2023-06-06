const memberController = {
  getMember: (req, res, next) => {
    res.render('index', { name: "Alan", balance: 150000, point: 2500 })
  },

  login: (req, res, next) => {
    res.render('login')
  },

  getMemberArea: (req, res, next) => {
    res.render('area')
  },
  getReservationHistories: (req, res, next) => {
    res.render('histories')
  },

  getNoHitReservations: (req, res, next) => {
    res.render('noHit')
  },
  getDetails: (req, res, next) => {
    res.render('details')
  },

  getMemberGifts: (req, res, next) => {
    res.render('gifts')
  },

  getReservation: (req, res, next) => {
    res.render('reservation')
  },

  getReservationChecks: (req, res, next) => {
    res.render('check')
  },

  getReservationAssist: (req, res, next) => {
    res.render('assist')
  }
}

module.exports = memberController