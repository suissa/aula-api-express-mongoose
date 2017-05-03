const express = require('express')
const router = express.Router()

const Model = require('./model')

router.post('/', (req, res, next) => {
  // Listagem com Model.create()
  const data = req.body
})

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

router.remove('/:id', (req, res, next) => {
  // Consulta com Model.remove()
  const id = req.params.id
})


module.exports = router
