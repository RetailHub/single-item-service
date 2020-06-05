/* eslint-disable linebreak-style */
/* eslint-disable space-infix-ops */
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
require('newrelic');
const express = require('express');
const path = require('path');

const app = express();
const compression = require('compression');
const bodyParser = require('body-parser');
// const db = require('./database/config');
const pgp = require('./pg/pgpIndex.js');

app.use(compression());
app.use(express.static(path.join(__dirname, '../public/')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// CREATE ROUTE
app.post('/api/items', (req, res) => {
  pgp.createImages(req, res);
});

// READ ROUTES
app.get('/api/items/:id', (req, res) => {
  pgp.getImages(req, res);
});

module.exports = app;
