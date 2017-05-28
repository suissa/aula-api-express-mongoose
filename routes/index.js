const express = require('express');
require('./../db/config');
const mongoose = require('mongoose');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Área Administrativa' });
});

/* GET Pagina Suissa. */
router.get('/suissa', function (req, res, next) {
  res.render('suissa', { title: 'Suissamon', suissa: 'Vamo que vamooooo' });
});

/* Post para verificar senha. */
router.get('/senha', function (req, res, next) {
  res.render('senha', { title: 'verificando senha', senha: 'Vamo que vamooooo' });
});

module.exports = router;
