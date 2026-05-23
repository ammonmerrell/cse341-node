const express = require('express');
const router = express.Router();

const gameControllers = require('../controllers/games.js');

// const validator = require('../utilities/validator.js');

router.get('/', gameControllers.getAll);
router.get('/:id', gameControllers.getSingle);
router.post('/',  gameControllers.createGame);
router.put('/:id',  gameControllers.updateGame);
router.delete('/:id', gameControllers.deleteGame);
module.exports = router;