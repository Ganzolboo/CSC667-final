const { MongoClient, ObjectID } = require('mongodb');

// Database Name
const dbName = "hw3-vinicius";

// location of where our mongoDB database is located
const url = "mongodb://localhost:27017";

// Options for mongoDB
const mongoOptions = {useNewUrlParser: true};

const state = {
  db: null
};

const connect = (c) => {
  if(state.db) {
    c();
  } else {
    MongoClient.connect(url, mongoOptions, (e, client) => {
      if(e) {
        c(e);
      } else {
        state.db = client.db(dbName);
        c();
      }
    });
  }
}

// returns OBJECTID object used to 
const getPrimaryKey = (_id) => {
  return ObjectID(_id);
}

// returns database connection 
const getDB = () => {
  return state.db;
}

module.exports = {getDB,connect,getPrimaryKey};