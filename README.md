# Middlehorse
*A member of the nüzu family*

A handy tool for Express Node.js apps to quickly implement the usual middleware with options set in a config file.

Includes
- serving static files via express.static
- console logging via supported loggers (currently just morgan)
- body-parser
- cookie-parser
- cors

It **does not** include any templating or view engine. 

## Installation

`npm install middlehorse --save`

## Usage

```javascript
import express from 'express'
import middlehorse from 'middlehorse'

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

```

## middlehorse API



