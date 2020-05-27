CREATE DATABASE items;

\c items;

DROP TABLE IF EXISTS items;

CREATE TABLE items (
  itemId SERIAL PRIMARY KEY,
  altImages text[]
);
