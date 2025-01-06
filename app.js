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

// const express = require('express')
// const app = express()

// const expressSession = require('express-session');

// app.use(expressSession({
//   secret: "randomsecret",
//   resave: false,
//   saveUninitialized: false
// }))

// app.get("/", function (req, res, next) {
//   res.send('Welcome');
// })

// app.get('/about', function (req, res, next) {
//   req.session.polo = true;
//   res.send("done");
// })  

// app.get('/check', function (req, res, next) {
//   console.log(req.session.polo);
// }) 

// app.listen(3000);


// connect flash
// const express = require('express')
// const app = express()
// const expressSession = require('express-session');
// const flash = require('connect-flash');

// app.use(expressSession({
//   secret: "randomsecret",
//   resave: false,
//   saveUninitialized: false
// }))
// app.use(flash());

// app.get('/', function (req, res, next) {
//   req.flash("error","invalid password");
//   res.redirect("/error");
// })  

// app.get('/error', function (req, res, next) {
//   let message = req.flash('error');
//   res.send(message);
// }) 

// app.listen(3000);


// cors
// const express = require('express');
// const app = express();
// const cors = require('cors');

// app.get('/', function (req, res, next) {
//     res.send("hello world");
// })

// app.get('/shareable', cors(), function (req, res, next) {
//     res.send("hello world");
// })

// app.listen(3000);



// Cookie-parser
// const express = require('express');
// const app = express();
// const cookieParser = require('cookie-parser');

// app.use(cookieParser())

// app.get('/', function (req, res, next) {
//     res.send("hello world");
// })

// app.get("/getCookie", function (req, res, next) {
//     console.log(req.cookies);
//     res.send("cookie received");
// })

// app.get("/banned", function (req, res, next) {
//     res.cookie("caste", "maratha");
//     res.send("cookie set for banned");
// })

// app.listen(3000);



// morgan

// const express = require('express');
// const app = express();
// const morgan = require('morgan');

// app.use(morgan("combined"));

// app.get('/', function (req, res, next) {
//     res.send("hello world");
// })

// app.get("/social", function (req, res, next) {
//     res.send("insta chhe");
// })

// app.listen(3000);


//req and res

// const express = require("express");
// const app = express();

// app.get("/", function (req, res) {
//     res.send("frontend se backend bhejana");;
// })

// app.listen(3000);



//dynamic routing

const express = require("express");
const app = express();

app.get("/",function(req, res){
    res.send("namste node js");
})

app.get("/prodfile",function(req, res){
    res.send("poduction it is the , I am working is the");
})

// app.get("/profile/:username",function(req, res){
//     res.send(req.params.username + "'s page");
// })

app.get("/author/:username/:book/:age",function(req, res){
    res.send(`the author is ${req.params.username} of the book ${req.params.book} at the age of ${req.params.age}`);
})

app.listen(3000);