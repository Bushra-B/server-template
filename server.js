'use strict';

// Load the Enviroument Variables

require('dotenv').config();

//---------------------------------------------//

// Server Dependencies

const express = require('express');
const cors = require('cors');
const pg = require('pg');
const superagent = require('superagent');

//---------------------------------------------//

// Initial Server Setup

const PORT = process.env.PORT || 3030;
const app = express();
app.use(cors());
const client = new pg.Client(process.env.DATABASE_URL);

//---------------------------------------------------//

// Handle any Route

app.get('/', (request,response) => {
  response.status('200').send('Hello World!');
});

//-------------------------------------------------//

// Route Definitions



//-------------------------------------------------//

// Route Handlers






//-------------------------------------------------//


// Handling any Errors

function errorHander(error, request, response) {
  response.status(500).send('Error 500: Sorry, something went wrong.\n', error);
}

//-------------------------------------------------------------------------------//

// Handle Not Found Errors

app.get('*', (request, response) => {
  response.status(404).send('Error 404: Page Not Found.');
});

//---------------------------------------------------------//

// Listening to port and connecting DB to the server

// client.connect().then( () => {
//   app.listen(PORT, () => {
//     console.log('Listening on port: ', PORT);
//   });
// });

app.listen(PORT, () => {
  console.log('Listening on port: ', PORT);
});

