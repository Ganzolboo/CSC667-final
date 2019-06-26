const express = require('express');
const app = express();
const port = 4000;

const db = require("./server/music");
const collection = "music";

// Get raw data from mongodb and display on http://localhost:4000/getMusic
app.get('/getMusic',(req,res)=>{
  db.getDB().collection(collection).find({}).toArray((e, docs) => {
    if(e) console.log(e);
    else res.json(docs);
  });
});

// Connect mongodb
db.connect((e) => {
  if(e) {
    console.log('ERROR: Unable to connect to Vinicius\' music database.');
    process.exit(1);
  }
  else {
    app.listen(port, () => {
      console.log('SUCCESS: Connected to Vinicius\' music database.');
    });
  }
});