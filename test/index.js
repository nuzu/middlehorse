const express = require('express')
const middlehorse = require('../dist/index').default

const app = express()

const middlehorseConfig = {
  static: {
    disable: false,
    path: 'file',
    folder: 'public'
  },
  logging: {
    logger: 'morgan',
    loggerFormat: 'combined'
  },
  bodyParser: {
    json: true,
    urlEncoded: true
  }
}

middlehorse(app, middlehorseConfig)

app.listen(4000)