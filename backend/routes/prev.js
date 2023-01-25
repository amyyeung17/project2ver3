const express = require('express');
const router = express.Router()
const prevController = require('../controllers/prev')

router.get('/extra', prevController.getExtra)

router.get('/filter', prevController.getFilter)

router.get('/input', prevController.getInput)

router.get('/refresh', prevController.getRefresh)

router.get('/past', prevController.getPast)

module.exports = router