/* eslint-disable linebreak-style */
/* eslint-disable space-infix-ops */
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
const express = require('express');
const path = require('path');

const app = express();
const bodyParser = require('body-parser');
const db = require('./database/config');

app.use(express.static(path.join(__dirname, '../public/')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CREATE ROUTE
app.post('/api/items', (req, res) => {
  db.createItem(req.body, (err) => {
    if (err) {
      res.status(400);
      res.end();
    } else {
      res.status(201);
      res.end();
    }
  });
});

// READ ROUTES
app.get('/api/items/:id', (req, res) => {
  db.getItem(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
      res.status(400);
      res.end();
    } else {
      res.send(data);
      res.end();
    }
  });
});

app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/'));
});

// UPDATE ROUTE
app.patch('/api/items/:id', (req, res) => {
  const { image } = req.body;
  db.updateItem(req.params.id, image, (err, data) => {
    if (err) {
      res.status(400).send('Unable to update');
    } else {
      res.status(204).send(data);
    }
  });
});

// DELETE ROUTE

module.exports = app;
