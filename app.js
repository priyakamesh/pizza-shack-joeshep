'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const routes = require('./routes/');

// pug template configuration
app.set('view engine', 'pug');

app.locals.company= "Pizza Shack 🍕"

// Middlewares
app.use(express.static('public'))
app.use(routes);
app.get('/register',(req,res,next)=>{
  res.render('register',{page:'Register'})
});
app.use((req,res)=>{
  res.render('404');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
