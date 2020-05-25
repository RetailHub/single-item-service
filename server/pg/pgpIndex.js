const promise = require('bluebird');
const pgp = require('pg-promise');

const options = {
  promiseLib: promise,
};

const client = pgp(options);
const connection = 'postgres://localhost:5432/items';
const db = client(connection);

