const express = require('express');
const router = express.Router();
const mysql = require('mysql');
var connection = require('../db.js')





router.get('/galary', function (req, res, next) {
    connection.query('SELECT * FROM images', function (err, rows) {

    
       console.log(rows);
      if (err) {
        req.flash('error', err)
        res.render('profile', { data: '' })
      } else {
        res.render('profile', { data: rows })
      }
    })
  })



module.exports = router