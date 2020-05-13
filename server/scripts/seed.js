/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable no-cond-assign */
const db = require('../database/config.js');
const Data = require('./dummyData.js');


const clearTables = async function clearTables() {
  await db.deleteAll();
};

clearTables();

const seedCollection = async function seedCollection() {
  let collection = {};
  let id = 1;
  while (collection = Data.pop()) {
    try {
      // eslint-disable-next-line no-await-in-loop
      await db.createItem({ itemId: id, altImages: collection.altImages }, (err, msg) => {
        if (err) { console.log(err); } else { console.log(msg); }
      });
      id++;
    } catch (e) {
      console.log(e);
    }
  }
};

seedCollection();
