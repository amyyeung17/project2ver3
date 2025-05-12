const express = require('express')
const serverless = require('serverless-http')
const path = require('path')
const Keygrip = require('keygrip')
const cookieSession = require('cookie-session')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const app = express()
const prevRouter = require('./routes/prev')
const searchRouter = require('./routes/search')
const spotifyRouter = require('./routes/spotify')

//1/27 - Added secure to cookieSession & helmet 
app.use(express.static('dist'))
app.use(express.json())
app.use(cookieParser())
app.use(cookieSession({
  name: 'spotifySession',
  keys: Keygrip([process.env.SPOTIFY_API_KEY_1, process.env.SPOTIFY_API_KEY_2, process.env.SPOTIFY_API_KEY_3], 'sha256', 'hex'),
  maxAge: 1000 * 60 * 60,
  secure: true
}))

app.get('/', (req, res) => res.send('HELLO'))

app.use('/.netlify/functions/server/prev', prevRouter)
app.use('/.netlify/functions/server/search', searchRouter)
app.use('/.netlify/functions/server/spotify', spotifyRouter)
app.use((err, req, res, next) => {
  if (err.response) {
    req.session.status = err.response.status
    res.status(err.response.status).send({error: err.response.data.error})
  } else {
    res.status(500).send({error: 'Unknown internal server error.', status: 500})
  }
})

app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

module.exports = app;
module.exports.handler = serverless(app)