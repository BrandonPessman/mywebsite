let mongoose = require('mongoose')

let BlogPostSchema = new mongoose.Schema({
  id: Number,
  author: String,
  title: String,
  body: String,
  date: Date,
})

let BlogPost = (module.exports = mongoose.model('BlogPost', BlogPostSchema))
