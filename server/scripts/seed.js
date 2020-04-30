const db = require('../database/config.js');
const Data = require('./dummyData.js');


const clearTable = async function(){
  await db.deleteAll();
}

clearTable();

const seedCollection = async function(){
  var collection = {};

  while(collection = Data.pop()){
    await db.createItem(collection,(err,msg) => {
      if(err){console.log(err);}
      else{console.log(msg);}
    });
  }
}

seedCollection();