const express = require('express');
const router = express.Router();
const auth = require('../utilities/authentication.js');

const storeControllers = require('../controllers/stores.js');

const validator = require('../utilities/validator.js');

router.get('/', storeControllers.getAll);
router.get('/:id', storeControllers.getSingle);
router.post('/', auth.isAuthenticated,validator.saveStore, storeControllers.createStore);
router.put('/:id', auth.isAuthenticated,validator.saveStore, storeControllers.updateStore);
router.delete('/:id', auth.isAuthenticated,storeControllers.deleteStore);
module.exports = router;