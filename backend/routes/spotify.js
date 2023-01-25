const express = require('express');
const router = express.Router()
const spotifyContoller = require('../controllers/spotify')


router.get('/test', spotifyContoller.getTest)

router.post('/additional', spotifyContoller.postAdditional)

router.post('/albumtracks', spotifyContoller.postAlbum)

router.post('/extra', spotifyContoller.postExtra)

router.get('/genres', spotifyContoller.getGenres)

router.post('/recommend', spotifyContoller.postRecommend)

router.post('/sample', spotifyContoller.postSample)

router.post('/search', spotifyContoller.postSearch)

router.post('/stats', spotifyContoller.postStats)

router.post('/token', spotifyContoller.postToken)

module.exports = router