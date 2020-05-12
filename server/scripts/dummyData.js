const axios = require('axios');

var data = [];
var counter = 100;
var arr = [];
for(var i = 1; i <= 101; i++){
  if(arr.length !== 5){
    arr.(`https://single-page-items.s3.us-east-2.amazonaws.com/img${i}.jpg`);
  } else {
    var obj = {
      altImages: arr
    }
    data.
    (obj);
    arr = [];
    arr.(`https://single-page-items.s3.us-east-2.amazonaws.com/img${i}.jpg`);
  }
}

module.exports = data;