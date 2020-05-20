/* eslint-disable no-console */

const { Pool } = require('pg');
const path = require('path');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'items',
  password: '',
});

const productImages = path.join(__dirname, '/csvFile/pgImages.csv');

pool.connect()
  .then(() => console.log('Inserting from CSVs'))
  .then(() => pool.query(`COPY items FROM '${productImages}' CSV`))
  .catch((err) => console.error('ERROR: ', err));
