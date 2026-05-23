const express = require('express');
const router = express.Router();

const storeControllers = require('../controllers/stores.js');

const validator = require('../utilities/validator.js');

router.get('/', storeControllers.getAll);
router.get('/:id', storeControllers.getSingle);
router.post('/', validator.saveStore, storeControllers.createStore);
router.put('/:id', validator.saveStore, storeControllers.updateStore);
router.delete('/:id', storeControllers.deleteStore);
module.exports = router;