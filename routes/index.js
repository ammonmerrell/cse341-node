const router = require('express').Router();
const passport = require('passport');

try { router.use('/', require('./swagger')) } catch (err) {
    console.log("Error with swagger: " + err);
}

// router.get('/', (req, res) => {
//     //# swaggerAutogen.tags=['hello World']
//     res.send('Hello World!');
// });
router.use('/games', require('./games'));
router.use('/stores', require('./stores'));

// eslint-disable-next-line no-unused-vars
try {router.get('/login', passport.authenticate('github'), (req, res) =>{}); } catch (err) {
    console.log("Error with authentication: " + err);
}

try {

router.get('/logout', (req, res, next) => {
    req.logout(function(err) {
        if (err) {return next(err); }
        res.redirect('/');  
    });
});

} catch (err) {
    console.log("Error logging out: " + err);
}


module.exports = router;