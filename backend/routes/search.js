const express = require('express');
const router = express.Router()
const searchController = require('../controllers/search')

router.post('/addpastinput', searchController.postPastInput)

router.get('/clearinput', searchController.getClearInput)

router.post('/updateinput', searchController.postUpdateInput)

router.post('/updatepast', searchController.postUpdatePast)

router.post('/updateseed', searchController.postUpdateSeed)

module.exports = router