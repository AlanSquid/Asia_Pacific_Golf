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