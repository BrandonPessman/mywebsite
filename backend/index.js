require('dotenv').config()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const express = require('express')
const app = express()

const database = require('./database')

const config = require('./config')

const PostsRoute = require('./routes/Posts')
const UsersRoute = require('./routes/Users')
const ProjectsRoute = require('./routes/Projects')

app.use(morgan('tiny'))

app.use(cors())
app.use(bodyParser.json())

mongoose.set('useFindAndModify', false)

app.use('/posts', PostsRoute)
app.use('/projects', ProjectsRoute)
app.use('/Users', UsersRoute)

// Creates the server and sets it up on the port
if (process.env.NODE_ENV === 'dev') {
  app.listen(config.dev_port, () => {
    console.log('Server is listening on port ' + config.dev_port)
  })
} else if (process.env.NODE_ENV === 'prod') {
  app.listen(config.port, () => {
    console.log('Server is listening on port ' + config.port)
  })
} else {
  console.log('You might be missing a .env file or not set correctly!')
}
