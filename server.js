const express = require('express');

const mongodb = require('./data/database');
const app = express();

// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000;

app.use('/', require('./routes'))



mongodb.initDb((err) => {
    if (err){
        console.log(err)
    }
    else {
        app.listen(port, () => {console.log(`Database is listening and node Running on port ${port}`)});
    }
})

