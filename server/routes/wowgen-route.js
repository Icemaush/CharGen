const express = require('express');
const controller = require('../controllers/controller');

// Create router
const router = express.Router();

// Set routes
// Faction routes
router.get('/factions', controller.factionController.getFactions);

// Race routes
router.get('/races', controller.raceController.getRaces);
router.get('/races/:faction_id', controller.raceController.getRacesByFaction);

// Gender routes
router.get('/genders', controller.genderController.getGenders);

// Class routes
router.get('/classes', controller.classController.getClasses);
router.get('/classes/:race_id', controller.classController.getClassesByRace);

// Spec routes
router.get('/specs', controller.specController.getSpecs);
router.get('/specs/:class_id', controller.specController.getSpecsByClass);

module.exports = router;
