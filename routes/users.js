var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.render('index', { name: "Alan", balance: 150000, point: 2500 });
});

router.get('/login', (req, res) => {
  res.render('login')
})
module.exports = router;
