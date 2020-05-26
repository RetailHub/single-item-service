/* eslint-disable no-console */

const promise = require('bluebird');
const pgp = require('pg-promise');

const options = {
  promiseLib: promise,
};

const client = pgp(options);
const connection = {
  host: 'localhost',
  port: 5432,
  database: 'items',
  user: 'me',
  password: 'me',
};
const db = client(connection);

module.exports = {
  getImages(req, res) {
    const { id } = req.params;
    db.one(`SELECT altImages FROM items WHERE itemid = ${id}`)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => console.error('ERROR GETTING IMAGES: ', err));
  },

  createImages(req, res) {
    console.log(req.body);
    db.none('INSERT INTO items(itemId, altImages) VALUES (${itemId}, ${altImages})', req.body)
      .then(() => {
        res.status(200).send('successfully inserted images!');
      })
      .catch((err) => console.error('ERROR INSERTING IMAGES: ', err));
  },
};
