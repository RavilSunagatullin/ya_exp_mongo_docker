module.exports = {
  mongo: {
    url: 'mongodb://db:27017/pindie',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  app: {
    port: 3000,
  },
}
