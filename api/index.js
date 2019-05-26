// Setup
var express = require('express')
var app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const axios = require('axios')

const bcrypt = require('bcrypt')
const saltRounds = 10

app.use(cors())

// For the .env Files
require('dotenv').config()

// MongoDB Models
var BlogPost = require('./models/Blogpost')
var User = require('./models/User')
var Project = require('./models/Project')

// MongoDB URL
const dbRoute =
  'mongodb+srv://' +
  process.env.DB_USER +
  ':' +
  process.env.DB_PASSWORD +
  '@' +
  process.env.DB_HOST

// Connects Backend to MongoDB
mongoose.connect(dbRoute, { useNewUrlParser: true })
let db = mongoose.connection

// Once Connected to MongoDB, Print this
db.once('open', () => console.log('Check 2: Connected to the MongoDB: Success'))

// If there is an error, Print this
db.on(
  'error',
  console.error.bind(
    console,
    'Check 2: Connected to the MongoDB: Failed. Error: '
  )
)

/* ____BLOG POST____ */
app.get('/blogpost', (req, res) => {
  BlogPost.find({}, (error, blogpost) => {
    if (error) {
      console.log('Blog Post: An Error has been thrown in GET')
      return
    }

    res.json({ data: blogpost })
  })
})

app.post('/blogpost', (req, res) => {
  var blogPost = new BlogPost({
    id: req.body.id,
    author: req.body.author,
    title: req.body.title,
    body: req.body.body,
    date: req.body.date,
  })

  blogPost.save(error => {
    if (error) {
      console.log('Blog Post: An Error has been thrown in POST')
      return
    }

    res.json(blogPost)
  })
})

app.get('/blogpost/:id', (req, res) => {
  BlogPost.findById(req.params.id, (error, blogpost) => {
    if (error) {
      console.log('Blog Post: An Error has been thrown in GET with :id')
      return
    }

    res.status(200).json({ data: blogpost })
  })
})

/* ____USER____ */
app.get('/user', (req, res) => {
  User.find({}, (error, user) => {
    if (error) {
      console.log('User: An Error has been thrown in GET')
      return
    }

    res.json({ data: user })
  })
})

app.get('/user/:id', (req, res) => {
  User.findById(req.params.username, (error, user) => {
    if (error) {
      console.log('User: An Error has been thrown in GET with :id')
      return
    }

    res.status(200).json({ data: user })
  })
})

/* ____LOGIN____ */
app.get('/login', (req, res) => {
  User.findById(req.params.username, (error, user) => {
    if (error) {
      console.log('Login: An Error has been thrown in GET with :id')
      return
    }

    console.log('Client Logged In')
    res.json({ data: user })
  })
})

/* ____REGISTER____ */
app.post('/register', (req, res) => {
  var user = new User({
    id: req.body.id,
    username: req.body.author,
    password: req.body.title,
    email: req.body.body,
    date: req.body.date,
    security_level: 1,
  })

  User.save(error => {
    if (error) {
      console.log('Register: An Error has been thrown in POST')
      return
    }

    res.json(user)
  })
})

/* ____PROJECT____ */
app.get('/projects', (req, res) => {
  Project.find({}, (error, project) => {
    if (error) {
      console.log('Projects: An Error has been thrown in GET')
      return
    }

    res.json({ data: project })
  })
})

app.post('/projects', (req, res) => {
  console.log(req.body)
  var project = new Project({
    id: req.body.id,
    title: req.body.title,
    body: req.body.body,
    date: req.body.date,
    image: req.body.image,
  })
  /*
  Project.save(error => {
    if (error) {
      console.log('Project: An Error has been thrown in POST')
      return
    }
*/
  // res.json(project)
  // })
})

// Listen
app.listen(process.env.PORT, () => {
  console.log('Check 1: Server Listening on Port: ' + process.env.PORT)
})
