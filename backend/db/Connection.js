const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const dbName = 'myDatabase';

async function connectToDatabase() {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  return db;
}

module.exports = connectToDatabase;