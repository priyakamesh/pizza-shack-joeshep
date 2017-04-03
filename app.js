'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const routes = require('./routes/');

app.set('views', __dirname + '/views1');
// pug template configuration
app.set('view engine', 'pug');

app.locals.company= "Pizza Shack 🍕"

// Middlewares
app.use(express.static('public'))
app.use(routes);
app.use((req,res)=>{
  res.render('404');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
