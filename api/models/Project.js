let mongoose = require('mongoose')

let ProjectSchema = new mongoose.Schema({
  id: Number,
  title: String,
  body: String,
  date: Date,
  image: String,
})

let Project = (module.exports = mongoose.model('Project', ProjectSchema))
