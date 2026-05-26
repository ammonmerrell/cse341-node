const router = require('express').Router();
const passport = require('passport');

router.use('/', require('./swagger'))

router.get('/', (req, res) => {
    //# swaggerAutogen.tags=['hello World']
    res.send('Hello World!');
});
router.use('/games', require('./games'));
router.use('/stores', require('./stores'));

// eslint-disable-next-line no-unused-vars
router.get('/login', passport.authenticate('github'), (req, res) =>{});

router.get('/logout', (req, res, next) => {
    req.logout(function(err) {
        if (err) {return next(err); }
        res.redirect('/');  
    });
});

module.exports = router;