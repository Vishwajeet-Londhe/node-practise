// const http = require('http');

const session = require("express-session")

// var server = http.createServer(function(req, res){
//     res.end("kuchh nahi baas chal raha hai, ye to magic hai bidu");
// })

// server.listen(3000);


// routing function

// const http = require('http');

// const server = http.createServer(function(req, res){
//     console.log(req);
//     res.end("hello");
// })
// server.listen(3000);

// const http = require('http');

// const server = http.createServer(function(req, res){
//     if(req.url === '/'){
//         res.end("Vishwajeet");
//     }
//     else if(req.url === '/about'){
//         res.end("Vishwajeet's about");
//     }
//     else{
//         res.end("page not found");
//     }
// })
// server.listen(3000);


// handle non-existent and middleware
// const express = require('express')
// const app = express()

// app.use(function(req, res, next){
//   console.log("hilo kaise ho");
//   next();
// })

// app.use(function(req, res, next){
//   console.log("bolo na");
//   next();
// })


// app.get('/', function (req, res) {
//   res.send('this is main is the')
// })

// app.get('/about', function (req, res) {
//     res.send('this is the about is the')
//   })

//   app.get('*', function (req, res) {
//     res.send('work in progress')
//   })

// app.listen(3000)



// express session

const express = require('express')
const app = express()

const expressSession = require('express-session');

app.use(expressSession({
  secret: "randomsecret",
  resave: false,
  saveUninitialized: false
}))

app.get("/", function (req, res, next) {
  res.send('Welcome');
})

app.get('/about', function (req, res, next) {
  req.session.polo = true;
  res.send("done");
})  

app.get('/check', function (req, res, next) {
  console.log(req.session.polo);
}) 

app.listen(3000);