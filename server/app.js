const express = require('express');
const path = require('path');
const app = express();
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
  });
});


app.get('/api/items/:id',(req, res) => {
  console.log('helo')
  db.getItem(req.params.id, (err, data) => {
    if(err){
      console.log('error: '+err);
      res.status(400);
      res.end();
    } else {
      res.send(data);
      res.end()
    }
  });
});
app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname,'../public/'));
})






module.exports = app;