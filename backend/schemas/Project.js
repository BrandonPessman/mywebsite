var mongoose = require('mongoose')
var Schema = mongoose.Schema

var projectSchema = new Schema({
  title: String,
  body: String,
  img: String,
  date: { type: Date, default: Date.now },
  sourceCode: String,
  liveCode: String
})

var Project = mongoose.model('Projects', projectSchema)
module.exports = Project
