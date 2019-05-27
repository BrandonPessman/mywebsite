// Setup
var express = require('express')
var app = express()
const mongoose = require('mongoose')
const cors = require('cors')
var bodyParser = require('body-parser')
const CircularJSON = require('circular-json')

const bcrypt = require('bcrypt')
const saltRounds = 10

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// For the .env Files
require('dotenv').config()

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
  db.collection('blogpost')
    .find({})
    .toArray(function(err, result) {
      if (err) throw err
      res.send(CircularJSON.stringify(result))
    })

  console.log('[MongoDB]\t|\tFIND from BLOGPOST is SUCCESSFUL')
})

app.post('/blogpost', (req, res) => {
  db.collection('blogpost')
    .insertOne({
      id: req.body.id,
      title: req.body.title,
      body: req.body.body,
      date: req.body.date,
      image: req.body.image,
    })
    .then(() => {
      console.log('[MongoDB]\t|\tINSERT into BLOGPOST is SUCCESSFUL')
    })
})

app.get('/blogpost/:id', (req, res) => {
  db.collection('BlogPosts').findById(req.params.id, (error, blogpost) => {
    console.log('Test')
  })
})

/* ____USER____ */
app.get('/user', (req, res) => {})

app.get('/user/:id', (req, res) => {})

/* ____LOGIN____ */
app.get('/login', (req, res) => {})

/* ____REGISTER____ */
app.post('/register', (req, res) => {})

/* ____PROJECT____ */
app.get('/projects', (req, res) => {
  db.collection('projects')
    .find({})
    .toArray(function(err, result) {
      if (err) throw err
      res.send(CircularJSON.stringify(result))
    })

  console.log('[MongoDB]\t|\tFIND from PROJECTS is SUCCESSFUL')
})

app.post('/projects', (req, res) => {
  db.collection('projects')
    .insertOne({
      id: req.body.id,
      title: req.body.title,
      body: req.body.body,
      date: req.body.date,
      image: req.body.image,
      githubURL: req.body.githubURL,
      liveURL: req.body.liveURL,
    })
    .then(() => {
      console.log('[MongoDB]\t|\tINSERT into PROJECTS is SUCCESSFUL')
    })
})

// Listen
app.listen(process.env.PORT, () => {
  console.log('Check 1: Server Listening on Port: ' + process.env.PORT)
})
