
const router = require("express").Router();

const contactsControllers = require('../controllers/contacts.js');

router.get('/', (req, res) =>{res.send('Hello World');});

// router.get('/contacts', require('./contacts'));
router.get('/contacts',  contactsControllers.getAll);
router.get('/contacts/:id', contactsControllers.getSingle);


module.exports = router;