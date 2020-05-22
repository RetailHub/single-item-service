DROP KEYSPACE IF EXISTS singleitems;

CREATE KEYSPACE singleitems WITH replication = {'class':'SimpleStrategy', 'replication_factor':1};

USE singleitems;

CREATE TABLE items (
  itemId INT PRIMARY KEY,
  altImages list<text>
);

COPY items FROM '/home/joshskkim/Documents/hrr45/SDC/service/server/database/images.csv' WITH DELIMITER = '|' AND HEADER = TRUE;
