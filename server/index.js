const express = require('express')
const bodyParser = require('body-parser')
// const mysql = require('mysql')
const app = express()
const port = process.env.PORT || 5000;
const connectToMongo = require('./db');
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// connectToMongo();

app.use('/api/auth', require('./routes/auth'))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})