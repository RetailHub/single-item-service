const express = require('express');
const path = require('path');
const app = express();
const port = 3001;
const bodyParser = require('body-parser');
const db = require('./database/config');
const faker = require('./scripts/dummyData');


app.use(express.static(path.join(__dirname,'../public/')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())



app.post('/api/items', (req,res) => {
  db.createItem(req.body,(err,msg) => {
    if(err){
      res.status(400);
      res.end();
    } else{
      res.status(201);
      res.end();
    }
  })
});







app.listen(port, () => {
  console.log('listening')
});