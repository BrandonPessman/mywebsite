const config = {
    port: process.env.PORT || 8080,
    db: 'mongodb+srv://admin:' + process.env.DB_PASSWORD + '@personal-website-xfy22.mongodb.net/prod',
    dev_port: 8081,
    dev_db: 'mongodb+srv://admin:' + process.env.DB_PASSWORD + '@personal-website-xfy22.mongodb.net/dev'
  }
  module.exports = config;