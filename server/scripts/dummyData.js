const axios = require('axios');

var data = [];
var counter = 100;
for(var i = 0; i < 100; i++){
  var obj = {
    itemId: i,
    mainImage:`https://i.picsum.photos/id/${i}/200/200.jpg`,
    altImages:[]
  }
  for(var k = 0; k < 4;k++){
    obj.altImages.push(`https://i.picsum.photos/id/${counter}/200/200.jpg`);
    counter++;
  }
  data.push(obj);
}
module.exports = data;