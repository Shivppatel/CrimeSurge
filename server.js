// These are our required libraries to make the server work.
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import express from 'express';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

/*
Sqlite Functionality Start
*/

const dbSettings = {
    filename: './tmp/database.db',
    driver: sqlite3.Database
  };
  const dbu = open.dbSettings;
  /* import sqlite3 */
  async function dataFetch() {
    const muData = await fetch('https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json');
    const muJson = await muData.json();
    res.json(muJson);
    console.log('POST request detected');
  
    return muJson.json();
  }
  
  async function insertIntoDB(data) {
    try {
      const restaurantName = data.name;
      /* const category = data.category; */
      const {category} = data;
  
      await db.exec(`INSERT INTO crimes (incident_case_id, clearance_code_inc_type) VALUES ("${incident_case_id}", "${clearance_code_inc_type}")`);
      console.log(`${incident_case_id} and ${clearance_code_inc_type} inserted`);
    }
  
    catch (e) {
      console.log('Error on insertion');
      console.log(e);
    }
  }
  
  async function databaseInitialize(dbSettings) {
    try {
      const db = await open(dbSettings);
      await db.exec(`CREATE TABLE IF NOT EXISTS crimes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        incident_case_id TEXT,
        clearance_code_inc_type TEXT)
        `)
      const data = await dataFetch();
      data.forEach((entry) => { insertIntoDB(entry) });
      const test = await db.get('SELECT * FROM crimes')
      console.log('Success');
    }
    catch (e) {
      console.log('Error loading Database');
      console.log(e);
    }
  }
  
  async function query(db) {
    const result = await db.all('SELECT category, COUNT(incident_case_id) FROM crimes GROUP BY clearance_code_inc_type');
    return result;
  }
  
  app.route('/sql')
    .get((req, res) => {
      console.log('GET detected');
    })
    .post(async (req, res) => {
      console.log('POST request detected');
      console.log('Form data in res.body', req.body);
      // This is where the SQL retrieval function will be:
      // Remove the below variable
      const db = await open(dbSettings);
      const output = await query(db);
      // This output must be converted to SQL
      res.json(output);
    });


/* 
Sqlite Functionality End
*/



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.route('/api')
  .get((req, res) => {
    console.log('GET request detected');
    /* const data = await fetch('https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json');
    const json = await data.json();
    console.log('data from fetch', json); */
  })
  /* Callback for lab 7 */
  .post(async (req, res) => {
    /*  Await statement for crimes */
    /* API for PG County Crimes */
    const nuData = await fetch('https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json');
    const nuJson2 = await nuData.json();
    res.json(nuJson2);
    console.log('POST request detected');
    /* res.status(200).send('Hello World'); */
    /* console.log('Form data in res.body', req.body); */
    /* Log statement for crimes */
    console.log('fetch request data', nuJson2);
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});