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
