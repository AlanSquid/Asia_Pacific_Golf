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

  getMemberBookedOrder: (req, res, next) => {
    res.render('booked-orders', { name: 'Alan' })
  },
  getMemberLogs: (req, res, next) => {
    res.render('logs', { name: 'Alan', balance: 15000 })
  },

  getMemberGifts: (req, res, next) => {
    res.render('gifts', { balance: 15000, gift: 2 })
  }

}

module.exports = memberController