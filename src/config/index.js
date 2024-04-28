module.exports = {
  mongo: {
    url: 'mongodb://db:27017/ya-express-server',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  app: {
    port: 3000,
  },
}
