/* eslint-disable no-console */

const { Client } = require('cassandra-driver');
const path = require('path');

const client = new Client({
  contactPoints: ['127.0.0.1'],
  localDataCenter: 'datacenter1',
  keyspace: 'singleitems',
});

const cassandracsv = path.join(__dirname, '../database/images.csv');

client.connect()
  .then(() => {
    console.log('Successful connection to Cassandra');
  })
  .then(() => {
    client.execute(`
    CREATE TABLE IF NOT EXISTS items (
      itemId VARINT PRIMARY KEY,
      altImages list<text>
    )

    CREATE INDEX IF NOT EXISTS ON items (itemId)`);
  })
  .then(() => {
    console.log('Table successfully created!');
  })
  .then(() => {
    client.execute(`COPY items FROM ${cassandracsv} with DELIMITER '|' AND HEADER=TRUE`);
  })
  .then(() => {
    console.log('Cassandra seeded!');
  })
  .catch((err) => {
    console.error('ERROR: ', err);
  });
