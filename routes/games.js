const express = require('express');
const router = express.Router();
const auth = require('../utilities/authentication.js');

const gameControllers = require('../controllers/games.js');

const validator = require('../utilities/validator.js');

router.get('/', gameControllers.getAll);
router.get('/:id', gameControllers.getSingle);
router.post('/',  auth.isAuthenticated, validator.saveGame, gameControllers.createGame);
router.put('/:id',  auth.isAuthenticated, validator.saveGame, gameControllers.updateGame);
router.delete('/:id', auth.isAuthenticated, gameControllers.deleteGame);
module.exports = router;