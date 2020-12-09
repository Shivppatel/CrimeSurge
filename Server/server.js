// These are our required libraries to make the server work.
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const express = require('express');
const dotenv = require('dotenv');
const fetch = require('node-fetch');
const path = require('path');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../Client/build')));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../Client/build', 'index.html'))
})
app.route('/api')
  .get((req, res) => {
    console.log('GET request detected');
    res.send('Api get request');
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