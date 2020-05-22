/* eslint-disable no-console */

const { Pool } = require('pg');
const path = require('path');

const pool = new Pool({
  user: 'me',
  password: 'me',
  host: 'localhost',
  database: 'items',
  port: '5432',
});

const productImages = path.join(__dirname, '../database/images.csv');

pool.connect()
  .then(() => console.log('Inserting from CSVs'))
  .then(() => pool.query('DELETE FROM items'))
  .then(() => pool.query(`COPY items FROM '${productImages}' DELIMITER '|' CSV HEADER`))
  .then(() => console.log('Finished inserting!'))
  .catch((err) => console.error('ERROR: ', err));
