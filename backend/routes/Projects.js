var express = require('express');
var app = express.Router();

const Projects = require('../schemas/Project')

app.get('/', (req, res) => {
  Projects.find({}, function (err, docs) {
    if (err) return err

    res.send(docs)
  })
})

app.get('/:id', (req, res) => {
  Projects.findById(req.params.id, function (err, docs) {
    if (err) return err

    res.send(docs)
  })
})

app.post('/', (req, res) => {
  const title = req.body.title
  const body = req.body.body
  const img = req.body.img
  const sourceCode = req.body.sourceCode
  const liveCode = req.body.liveCode

  var project = new Projects({
    title: title,
    body: body,
    img: img,
    sourceCode: sourceCode,
    liveCode: liveCode
  })
  project.save(function (err) {
    if (err) return err
  })

  res.send('Added a new Project!')
})

app.delete('/:id', (req, res) => {
  Projects.findByIdAndDelete(req.params.id, function (doc) {
    res.send('Removed Project: ' + req.params.id)
  })
})

app.patch('/:id', (req, res) => {
  const title = req.body.title
  const body = req.body.body
  const img = req.body.img
  const sourceCode = req.body.sourceCode
  const liveCode = req.body.liveCode

  Projects.findOneAndUpdate(
    { _id: req.params.id },
    {
      title: title,
      body: body,
      img: img,
      sourceCode: sourceCode,
      liveCode: liveCode
    },
    { upsert: true },
    function (doc) {
      res.send('Updated Project: ' + req.params.id)
    }
  )
})

module.exports = app