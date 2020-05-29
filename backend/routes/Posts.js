var express = require('express');
var app = express.Router();

const Posts = require('../schemas/Post')

app.get('/', (req, res) => {
  Posts.find({}, function (err, docs) {
    if (err) console.log(err)

    res.send(docs)
  })
})

app.get('/:id', (req, res) => {
  Posts.find({ _id: req.params.id }, function (err, docs) {
    if (err) return err

    res.send(docs)
  })
})

app.post('/', (req, res) => {
  const title = req.body.title
  const author = req.body.author
  const body = req.body.body

  var post = new Posts({ title: title, author: author, body: body })
  post.save(function (err) {
    if (err) return err
  })

  res.send('Added a new Post!')
})

app.delete('/:id', (req, res) => {
  Posts.findByIdAndDelete(req.params.id, function (doc) {
    res.send('Removed Post: ' + req.params.id)
  })
})

app.patch('/:id', (req, res) => {
  const title = req.body.title
  const author = req.body.author
  const body = req.body.body

  Posts.findOneAndUpdate(
    { _id: req.params.id },
    { title: title, author: author, body: body },
    { upsert: true },
    function (doc) {
      res.send('Updated Post: ' + req.params.id)
    }
  )
})

module.exports = app