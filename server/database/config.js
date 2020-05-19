/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable func-names */
const mongoose = require('mongoose');

const uri = 'mongodb://localhost/singleItemPage';
mongoose.connect(uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  });
const { Schema } = mongoose;


const itemSchema = new Schema({
  itemId: Number,
  altImages: [String],
});

const Item = mongoose.model('Items', itemSchema);

const createItem = function (obj, cb = () => {}) {
  const item = new Item(obj);

  item.save((err) => {
    if (err) { cb(err, null); } else { cb(null, 'congrats'); }
  });
};

const getItem = (id, cb) => {
  Item.findOne({ itemId: id }, (err, item) => {
    if (err) {
      return cb(err, null);
    }
    return cb(null, item);
  });
};

const updateItem = (id, image, cb) => {
  Item.findOneAndUpdate({ itemId: id },
    {
      $push: {
        altImages: image,
      },
    },
    {
      new: true,
      upsert: true,
    }, (err, item) => {
      if (err) {
        return cb(err);
      }
      return cb(null, item);
    });
};

const deleteAll = () => {
  Item.deleteMany({}, (err) => {
    if (err) { console.log(err); }
  });
};

const deleteOne = (id, cb) => {
  console.log(id);
  Item.findOneAndDelete({ itemId: id }, (err, query) => {
    if (err) {
      return cb(err);
    }
    return cb(null, query);
  });
};

module.exports = {
  createItem,
  getItem,
  updateItem,
  deleteAll,
  deleteOne,
};
