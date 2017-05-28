const express = require('express')
const mongoose = require('mongoose');
const router = express.Router()

const Schema = mongoose.Schema;

const Model = require('./model')

router.post('/:', (req, res, next) => {
  // Listagem com Model.create()
  const data = new Model(req.body);
  data.save(function (err, post) {
    if (err) {
      return next(err);
    } else {
      res.json(post);
    }
  });
});


router.get('/', (req, res, next) => {
  // Listagem com Model.find()
})

router.get('/:id', (req, res, next) => {
  // Consulta com Model.findOne()
  const id = req.params.id
})

router.put('/:id', (req, res, next) => {
  // Consulta com Model.update()
  const id = req.params.id
  const data = req.body
})

router.delete('/:id', (req, res, next) => {
  // Consulta com Model.delete()
  const id = req.params.id
})


module.exports = router
