DROP DATABASE IF EXISTS items;

CREATE DATABASE items;

\c items;

CREATE TABLE items (
  itemId SERIAL PRIMARY KEY,
  altImages JSON
);