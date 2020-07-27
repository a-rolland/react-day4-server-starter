const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const Project = require('../models/project-model')
const Task = require('../models/task-model')

router.post('/projects', (req, res, next) => {
  Project.create({
    title: req.body.title,
    description: req.body.description,
    tasks: []
  })
  .then(response => {qes.json(response)
  })
  .catch(err => {
    res.json(err)
  })
})

router.get('/projects', async (req, res, next) => {
  // Recoger todos los proyectos, y devolver como JSON
  try {
    const projects = await Project.find()
    res.json(projects)
  } catch(err) {
    res.json(err)
  }
})

router.get('/projects/:id', (req, res, next) => {
  Project.findById(req.params.id)
  .then(project => {
    res.json(project)
  })
  .catch(err => {
    res.json(err)
  })
})

router.put('/projects/:id', (req, res, next) => {
  Project.findByIdAndUpdate(req.params.id, req.body)
  .then(project => {
    res.json(project)
  })
  .catch(err => {
    res.json(err)
  })
})

router.delete('/projects/:id', (req, res, next) => {
  Project.findByIdAndDelete(req.params.id)
  .then(project => {
    res.json(project)
  })
  .catch(err => {
    res.json(err)
  })
})

module.exports = router