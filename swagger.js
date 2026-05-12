
const swaggerAutogen = require('swagger-autogen')({openapi: '3.0.0'});

const doc = {
  info: {
    version: "1.0.0",
    title: 'My API',
    description: 'This is the Description'
  },
  servers: [

    {
        url: '',
        description: ''
    },
],
tags: [                   // by default: empty Array
    {
      name: '',             // Tag name
      description: ''       // Tag description
    },
],
components: {components: {
        schemas: {
            contacts: {
                _id: '69ac5e5c914b79cfcfe8dca9',
                firstName: 'Ben',
                lastName: 'Fielding',
                email: 'ben@google.gmail',
                favoriteColor: 'red',
                birthday: '04/2/2002',

            },
        }
    }}

};


const outputFile = './swagger-output.json';
const routes = ['./routes/index.js', './routes/contacts.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc).then(() => {
require('./server.js'); // Start your app after docs are built
});