const express = require('express');
const router = express.Router();

const storeControllers = require('../controllers/stores.js');

// const validator = require('../utilities/validator.js');

router.get('/', storeControllers.getAll);
router.get('/:id', storeControllers.getSingle);
router.post('/', storeControllers.createStore);
router.put('/:id', storeControllers.updateStore);
router.delete('/:id', storeControllers.deleteStore);
module.exports = router;