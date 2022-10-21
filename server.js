const http = require('http');
const express = require('express'); 
const app = express(); // calls express
const expressLayouts = require('express-ejs-layouts')

// server
const server = http.createServer(app);
server.listen(8080);
 app.use(expressLayouts)
//sets layout
 app.set('layout', './layouts/home.ejs')
 app.set('view engine', 'ejs')

 //navigates
 app.get('/',(req,res)=>{
     res.render('index')
 })
 app.get('/login',(req,res)=>{
     res.render('login')
 })

