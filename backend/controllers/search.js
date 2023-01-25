const { getUri } = require('./editRoutes')

const getClearInput = async(req, res, next) => {
  try {
    req.session.input = ''
    res.send({status: 200})
  } catch (err) {
    next(err)
  }
}

const postPastInput = async(req, res, next) => {
  try {
    const { input } = req.body
    const newInputs = [...req.session.pastInputs]
    if (newInputs.length !== 0) {
      if (newInputs[newInputs.length - 1] !== input) {
        if (newInputs.length >= 10) {
          req.session.pastInputs = [...newInputs.slice(1), input]
        } else {
          req.session.pastInputs = [...newInputs, input]
        }
      } else {
        req.session.pastInputs = newInputs
      }
    } else {
      req.session.pastInputs = [input]
    }
    res.send({status: 200})
  } catch (err) {
    next(err)
  }
}

const postUpdateInput = async(req, res, next) => {
  try {
    req.session.input = req.body.temp
    res.send({status: 200})
  } catch (err) {
    next(err)
  }
}

const postUpdatePast = async(req, res, next) => {
  try {
    const { info } = req.body
    const { pastInputs, pastTracks } = info
    
    req.session.pastInputs = pastInputs
    req.session.pastTracks = getUri({seed: pastTracks})
    res.send({status: 200})
  } catch (err) {
    next(err)
  }
}

const postUpdateSeed = async(req, res, next) => {
  try {
    const newSeed = ( req.body.seed.length !== 0 ? [...req.body.seed.map(s => s.id)] : [])
    const oldSeed = ( req.session.seed.length !== 0 ? [...req.session.seed.map(s => s.id)] : [])
    const sameValue = oldSeed.every(e => newSeed.includes(e))
    if (newSeed.length !== req.session.seed.length 
        || (newSeed.length === req.session.seed.length && !sameValue)) {
      req.session.seed = [...newSeed.map(s => ({id: s}))]
      req.session.emotion['retrievedSeed'] = false
    }
    res.send({updated: req.session.emotion['retrievedSeed'], seed: req.session.seed})
    
  } catch (err) {
    next(err)
  }
}

module.exports = {
  getClearInput,
  postPastInput,
  postUpdateInput,
  postUpdatePast,
  postUpdateSeed
}