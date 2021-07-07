const express = require('express');

const wowgenRoutes = require('../controllers/wowgen-controller');

const router = express.Router();

router.get('/factions', wowgenRoutes.getFactions);

module.exports = router;