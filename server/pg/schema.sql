DROP DATABASE IF EXISTS items;

CREATE DATABASE items;

\c items;

DROP TABLE IF EXISTS items;

CREATE TABLE items (
  itemId SERIAL PRIMARY KEY,
  altImages JSON
);

COPY items FROM '/home/joshskkim/Documents/hrr45/SDC/service/server/database/images.csv' DELIMITER '|' CSV HEADER;