/* eslint-disable no-console */

const cassandra = require('cassandra-driver');

const path = require('path');

const client = new cassandra.Client({
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
    CREATE TABLE IF NOT EXISTS singleitems.items (
      itemId VARINT PRIMARY KEY,
      altImages list<text>
    )`)
      .then(() => {
        console.log('Table successfully created!');
      });
  })
  .catch((err) => {
    console.error('ERROR: ', err);
  });
