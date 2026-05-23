const validator = require('./validatorjsPlugin.js');

// game validation

const saveGame = (req, res, next ) => {
    const validationRule = {
        name: 'required|string',
        releaseDate: 'required|string',
        platform: 'required|string',
        genre: 'required|string',
        description: 'required|string',
        players: 'required|string',
        type: 'required|string'
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412).send({
                success: false,
                message: 'Validation failed',
                data: err
            });
        } else {
            next();
        }
    });
};

// store validation

const saveStore = (req, res, next ) => {
    const validationRule = {
        city: 'required|string',
        items: 'required|string'
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412).send({
                success: false,
                message: 'Validation failed',
                data: err
            });
        } else {
            next();
        }
    });
};


module.exports = {
    saveGame,
    saveStore
}