/* eslint-disable no-console */
/* eslint-disable no-template-curly-in-string */

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
      .then(({ altimages }) => {
        const images = [];
        altimages.forEach((link) => {
          images.push(link.slice(1, -1));
        });
        res.status(200).send(images);
      })
      .catch((err) => console.error('ERROR GETTING IMAGES: ', err));
  },

  createImages(req, res) {
    db.none('INSERT INTO items(itemId, altImages) VALUES (${itemId}, ${altImages}) ON CONFLICT (itemId) DO UPDATE SET altImages = EXCLUDED.altImages', req.body)
      .then(() => {
        res.status(200).send('successfully inserted images!');
      })
      .catch((err) => console.error('ERROR INSERTING IMAGES: ', err));
  },
};
