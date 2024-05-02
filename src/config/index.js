module.exports = {
  mongo: {
    url: 'mongodb://db:27017/pindie',
    // url:'mongodb://localhost:27017/Pindie',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  app: {
    port: 3000,
  },
}
