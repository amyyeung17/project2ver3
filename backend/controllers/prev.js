const axios = require('axios');
const { authorizeToken, getInfoUrls } = require('./editRoutes')

const getExtra = async(req, res, next) => {
  try {
    res.send({extra: req.session.extra})
  } catch (err) {
    next(err)
  }
}

const getFilter = async(req, res, next) => {
  try {
    res.send({prevFilter: req.session.filter, prevGenres: req.session.genres})
  } catch (err) {
    next(err)
  }
}

const getInput = async(req, res, next) => {
  try {
    res.send({prevInput : req.session.input, seed: req.session.seed, status: 200})
  } catch (err) {
    next(err)
  }
}

const getPast = async(req, res, next) => {
  try {
    if (req.session.pastTracks.length !== 0) {
      const trackInfo = await axios.get(getInfoUrls({type: 'tracks', seed: req.session.pastTracks}), authorizeToken({...req.session}))
      res.send({pastTracks: trackInfo.data.tracks, pastInputs: req.session.pastInputs})
    } else {
      res.send({pastTracks: [], pastInputs: req.session.pastInputs})
    }

  } catch (err) {
    next(err)
  }
}

const getRefresh = async (req, res, next) => {
  try {
    if (Object.keys(req.session).length !== 0) {
      if (req.session.seed.length !== 0) {
        const trackInfo = await axios.get(getInfoUrls({type: 'tracks', seed: req.session.seed}), authorizeToken({...req.session}))
        if (req.session.emotion['retrievedSeed']) {
          const seedTracks = trackInfo.data.tracks.map((track, index) => ({
            ...track, valence: req.session.seed[index]['valence'], intensity: req.session.seed[index]['intensity']
          }))
          res.send({prevSeed: seedTracks, emotion: req.session.emotion, type: 'emotion', status: 200})
        } else {
          res.send({prevSeed: trackInfo.data.tracks, type: 'seed', status: 200})
        }
      } else {
        res.send({status: 200, type: 'empty'})
      }
    }
  } catch(err) {
    next(err)
  }
}

module.exports = {
  getExtra,
  getFilter,
  getInput,
  getPast,
  getRefresh
}