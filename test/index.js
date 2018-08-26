const express = require('express')
const middlehorse = require('../dist/index').default

const app = express()

const middlehorseConfig = {
  static: {
    disable: false,
    path: 'file',
    staticFolder: 'public'
  },
  logging: {
    logger: 'morgan',
    loggerFormat: 'combined'
  },
  bodyParser: {
    json: true,
    urlEncoded: true
  },
  template: {
    engine: 'react',
    templateFolder: '../test'
  }
}

middlehorse(app, middlehorseConfig)

app.use('/test', (req, res) => res.render("test"))

app.listen(4000)