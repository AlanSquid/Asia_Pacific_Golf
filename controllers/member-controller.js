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
  }

}

module.exports = memberController