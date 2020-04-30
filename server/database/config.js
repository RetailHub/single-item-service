const mongoose = require('mongoose');
var uri = 'mongodb://localhost:27017/singleItemPage?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false';
mongoose.connect(uri,{useNewUrlParser: true});
const Schema = mongoose.Schema;

var db = mongoose.connection;

var itemSchema = new Schema({
  itemId: Number,
  mainImage: String,
  altImages: [String]
});

var Item = mongoose.model('Items', itemSchema);

var createItem = function(obj, cb = () => {}){
  var item = new Item(obj);

  item.save((err) => {
    if(err){cb(err, null)}
    else{cb(null,'congrats')}
  });
};
var deleteAll = function(){
  Item.deleteMany({},(err) => {
    if (err){console.log(err);}
  });
};
var getItem = (id,cb) => {
  Item.findOne({itemId: id}, function(err, item){
    if(err){
      return cb(err, null);
    } else{
      return cb(null, item);
    }
  });
};

module.exports  = {
  createItem,
  deleteAll,
  getItem
};