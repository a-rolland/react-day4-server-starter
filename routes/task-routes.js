const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const Project = require('../models/project-model')
const Task = require('../models/task-model')

router.post('/tasks', (req, res, next) => {
  Task.create({
    title: req.body.title,
    description: req.body.description,
    project: {}
  })
  .then(response => {qes.json(response)
  })
  .catch(err => {
    res.json(err)
  })
})

router.get('/tasks/:id', (req, res, next) => {
  Task.findById(req.params.id)
  .then(tasks => {
    res.json(tasks)
  })
  .catch(err => {
    res.json(err)
  })
})

router.put('/tasks/:id', (req, res, next) => {
  Task.findByIdAndUpdate(req.params.id, req.body)
  .then(tasks => {
    res.json(tasks)
  })
  .catch(err => {
    res.json(err)
  })
})

router.delete('/tasks/:id', (req, res, next) => {
  Task.findByIdAndDelete(req.params.id)
  .then(tasks => {
    res.json(tasks)
  })
  .catch(err => {
    res.json(err)
  })
})

module.exports = router