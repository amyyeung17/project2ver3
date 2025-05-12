const axios = require('axios');
const qs = require('qs');
const { authorizeToken, roundEmotion, roundEmotionAvg, getAlbumUrl, getRecUrl, 
  getSearchUrl, getInfoUrls, setPastTracks } = require('./editRoutes')

const getGenres = async (req, res, next) => {
  try { 
  const { token } = req.session
  const genreOptions = await axios.get(getInfoUrls({type: 'genre'}), authorizeToken({token}))
  res.send({genres: genreOptions.data.genres, status: genreOptions.status})
  } catch (err) {
    next(err)
  }
}

const getTest = async (req, res, next) => {
  try {
    res.send({message: 'test'})
  } catch (err) {
    next(err)
  }
}


const postAdditional = async (req, res, next) => {
  try {
    const { url } = req.body
    const { token } = req.session
    const newResults = await axios.get(url, authorizeToken({token}))
    const {items, ...editedData} = newResults.data.tracks
    editedData.tracks = items 
    res.send({editedData})
  } catch (err) {
    next(err)
  }
}

const postAlbum = async (req, res, next) => {
  try {
    const { token } = req.session
    const albumTracks = await axios.get(getAlbumUrl({type: 'update', ...req.body}), authorizeToken({token}))
    res.send({tracks: albumTracks.data.items, status: albumTracks.status})
  } catch (err) {
    next(err)
  }
}

const postExtra = async (req, res, next) => {
  try {
    const { songState, uri } = req.body
    const { href } = songState
    const { token } = req.session
    req.session.extra = {...songState, uri}
    const pastTracks = [...req.session.pastTracks]
    req.session.pastTracks = setPastTracks({pastTracks, uri})
    const access = authorizeToken({token})

    const trackInfo = await axios.get(href, access)
    const trackFeatures = await axios.get(getInfoUrls({type: 'stats', seed: uri}), access)
    const albumTracks = await axios.get(getAlbumUrl({id: trackInfo.data.album.id, trackNumber: trackInfo.data.track_number, type: 'start'}), access)
    const artistInfo = await axios.get(getInfoUrls({type: 'artist', artists: trackInfo.data.artists}), access)
    const editedArtists = [...artistInfo.data.artists]
    //CHECK! 4-3-2023 -> no return but set index? 
    const getArtistTracks = async({artist, index}) => {
      const artistTracks = await axios.get(getInfoUrls({type: 'artistTracks', artistId: artist.id}) , access)
      editedArtists[index] = {...editedArtists[index], tracks: artistTracks.data.tracks}
    }

    await Promise.all(editedArtists.map(async (artist, index) => {
      await getArtistTracks({artist, index})
    }))

    res.send({track: trackInfo.data, features: trackFeatures.data.audio_features, album: albumTracks.data.items, artists: editedArtists, status: 200})    
  } catch (err) {
    next(err)
  }
}

const postRecommend =  async (req, res, next) => {
  try {
    const { token } = req.session
    const trackResults = await axios.get(getRecUrl({...req.body}), authorizeToken({token}))
    res.send({tracks: trackResults.data.tracks, status: trackResults.status, seeds: trackResults.data.seeds})
  } catch (err) {
    next(err)
  }
}

const postSample = async (req, res, next) => {
  try {
    const { token } = req.session
    req.session.emotion[req.body.type] = parseInt(req.body.value)
    const sampleResults = await axios.get(getRecUrl({...req.body, sample: true}),authorizeToken({token}))
    res.send({tracks: sampleResults.data.tracks, status: sampleResults.status})
  } catch (err) {
    next(err)
  }
}

const postSearch = async (req, res, next) => {
  try {
    const { token } = req.session
    const { input } = req.body
    input.trim()
    req.session.filter = req.body.filter
    req.session.genres = req.body.genres
    const trackResults = await axios.get(getSearchUrl({input, ...req.body}), authorizeToken({token}))
    if (req.body.input !== req.session.input) {
      req.session.input = req.body.input
    }

    const {items, ...editedData} = trackResults.data.tracks
    editedData.tracks = items 
    res.send({editedData})
  } catch (err) {
    next(err)
  }
}

const postStats =  async (req, res, next) => {
  try {
    const { token } = req.session
    const featureResults = await axios.get(getInfoUrls({type: 'stats', ...req.body}), authorizeToken({token}))
    const { audio_features } = featureResults.data

    const newSeed = req.body.seed.map((item, index) => (
      {...item, valence: roundEmotion(audio_features[index].valence), intensity: roundEmotion(audio_features[index].energy)}
    ))
    const avgValence = roundEmotionAvg({value: audio_features, type: 'valence'})
    const avgIntensity = roundEmotionAvg({value: audio_features, type: 'energy'})
    req.session.seed = req.session.seed.map((s, index) => ({
      ...s, valence: roundEmotion(audio_features[index].valence), intensity: roundEmotion(audio_features[index].energy)
    }))
    req.session.emotion = {valence: avgValence, intensity: avgIntensity, retrievedSeed: true, status: 'Complete', avgValence, avgIntensity}
    res.send({newSeed, avgIntensity, avgValence})
  } catch (err) {
    next(err)
  }
}

const postToken = async (req, res, next) => {
  try {
    let form = qs.stringify({'grant_type': 'client_credentials'})
    let authOptions = {
      headers: {
        'Authorization': 'Basic ' + (Buffer.from(process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET).toString('base64')),
        'Content-Type': 'application/x-www-form-urlencoded' 
      },
      json: true
    };

    if (Object.keys(req.session).length === 0 
      || (Object.keys(req.session).length !== 0 && (req.session.status === 401 || req.session.status === 400))) {
      const results = await axios.post(getInfoUrls({type: 'token'}), form, authOptions)
      req.session.token = results.data.access_token
      req.session.status = results.status
      req.session.input = ''
      req.session.seed = []
      req.session.filter = {track: false, artist: false, album: false, genre: false}
      req.session.genres = []
      req.session.emotion = {valence: 0, intensity: 0, retrievedSeed: false, status: 'status', avgValence: 0, avgIntensity: 0}
      req.session.pastTracks = []
      req.session.pastInputs = []
      res.send({status: results.status, message: 'Created'})
    }
    res.send({status: 200, message: 'Token already made'})
  } catch(err) {
    next(err)
  }
}

module.exports = {
  getGenres,
  postAdditional,
  postAlbum,
  postExtra,
  postRecommend,
  postSample,
  postSearch,
  postStats,
  postToken,
  getTest
}