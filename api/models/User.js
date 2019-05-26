let mongoose = require('mongoose')

let UserSchema = new mongoose.Schema({
  id: Number,
  username: String,
  password: String,
  email: String,
  date: Date,
  security_level: Number,
})

let User = (module.exports = mongoose.model('User', UserSchema))
