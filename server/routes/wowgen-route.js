const express = require('express');
const app = express();
const controller = require('../controllers/controller');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Create router
const router = express.Router();

// Set routes
// Faction routes
app.get('/factions', async (req, res) => {
    const results = await controller.factionController.getFactions();
    res.status(200).json({ results });
});


//router.get('/factions', controller.factionController.getFactions);


// // Race routes
// router.get('/races', controller.raceController.getRaces);
// router.get('/races/:faction_id', controller.raceController.getRacesByFaction);

// // Gender routes
// router.get('/genders', controller.genderController.getGenders);

// // Class routes
// router.get('/classes', controller.classController.getClasses);
// router.get('/classes/:race_id', controller.classController.getClassesByRace);

// // Spec routes
// router.get('/specs', controller.specController.getSpecs);
// router.get('/specs/:class_id', controller.specController.getSpecsByClass);

// // Character routes
// router.get('/character/generate', controller.characterController.generateCharacter);

module.exports = router;
