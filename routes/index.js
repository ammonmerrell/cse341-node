const router = require('express').Router();

router.use('/', require('./swagger'))

router.get('/', (req, res) => {
    //# swaggerAutogen.tags=['hello World']
    res.send('Hello World!');
});
router.use('/games', require('./games'));
router.use('/stores', require('./stores'));

module.exports = router;