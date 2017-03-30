'use strict';

require('dotenv').config();
const express = require('express');
const app = express();


// pug template configuration
app.set('view engine', 'pug');


// Middlewares
app.use(express.static('public'))





app.get('/', (req, res, next) => {
  console.log('home route loaded')

  res.render('index')
})








const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
