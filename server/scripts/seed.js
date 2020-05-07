const db = require('../database/config.js');
const Data = require('./dummyData.js');


const clearTables = async function(){
  await db.deleteAll();
}

clearTables();

const seedCollection = async function(){
  var collection = {};
  var id = 0;
  while(collection = Data.pop()){
    try{
      await db.createItem({itemId:id,altImages:collection.altImages},(err,msg) => {
        if(err){console.log(err);}
        else{console.log(msg);}
      });
      id++;
    } catch(e){
      console.log(e);
    }
  }
}

seedCollection();