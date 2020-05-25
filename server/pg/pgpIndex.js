/* eslint-disable no-console */

const promise = require('bluebird');
const pgp = require('pg-promise');

const options = {
  promiseLib: promise,
};

const client = pgp(options);
const connection = 'postgres://localhost:5432/items';
const db = client(connection);

module.exports = {
  getImages(req, res) {
    const { id } = req.params;
    db.one(`SELECT altImages FROM items WHERE itemid = ${id}`)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => console.error(err));
  },
};
