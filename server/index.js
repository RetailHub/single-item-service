/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable eol-last */
const express = require('express');

const path = require('path');

const app = express();
const port = 3001;
const bodyParser = require('body-parser');
const db = require('./database/config');


app.use(express.static(path.join(__dirname, '../public/')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
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
app.listen(port, () => {
  console.log('listening');
});