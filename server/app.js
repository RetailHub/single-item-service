/* eslint-disable linebreak-style */
/* eslint-disable space-infix-ops */
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
const express = require('express');
const path = require('path');
require('newrelic');

const app = express();
const bodyParser = require('body-parser');
// const db = require('./database/config');
const pgp = require('./pg/pgpIndex.js');

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
  // db.getItem(req.params.id, (err, data) => {
  //   if (err) {
  //     res.status(400);
  //   } else {
  //     console.log(data);
  //     res.status(200).send(data);
  //   }
  // });
});

// app.get('/:id', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/'));
// });

// UPDATE ROUTE
// app.patch('/api/items/:id', (req, res) => {
//   const { image } = req.body;
//   db.updateItem(req.params.id, image, (err, data) => {
//     if (err) {
//       res.status(404).send('Unable to update');
//     } else {
//       res.status(204).send(data);
//     }
//   });
// });

// DELETE ROUTE
// app.delete('/api/items/:id', (req, res) => {
//   db.deleteOne(req.params.id, (err, result) => {
//     if (err) {
//       res.status(404).send('Unable to delete');
//     } else {
//       res.status(200).send(result);
//     }
//   });
// });

module.exports = app;
