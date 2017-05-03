var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Pagina Suissa. */
router.get('/suissa', function(req, res, next) {
  res.render('suissa', { title: 'Suissamon', suissa: 'Vamo que vamooooo' });
});

module.exports = router;
