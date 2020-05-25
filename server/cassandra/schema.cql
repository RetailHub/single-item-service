DROP KEYSPACE IF EXISTS singleitems;

CREATE KEYSPACE singleitems WITH replication = {'class':'SimpleStrategy', 'replication_factor':1};

USE singleitems;

CREATE TABLE items (
  itemId INT PRIMARY KEY,
  altImages list<text>
) WITH bloom_filter_fp_chance = 0.1
AND caching = {'keys': 'ALL', 'rows_per_partition': 'ALL'}
AND default_time_to_live = 0
AND gc_grace_seconds = 864000
AND memtable_flush_period_in_ms = 0
AND speculative_retry = '99PERCENTILE'
AND compaction = {'class': 'LeveledCompactionStrategy'}
AND compression = {'sstable_compression': 'LZ4Compressor'};

tracing on;

COPY items FROM '/home/joshskkim/Documents/hrr45/SDC/service/server/database/images.csv' WITH DELIMITER = '|' AND HEADER = TRUE;
