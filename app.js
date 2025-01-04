// const http = require('http');

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

const http = require('http');

const server = http.createServer(function(req, res){
    if(req.url === '/'){
        res.end("Vishwajeet");
    }
    else if(req.url === '/about'){
        res.end("Vishwajeet's about");
    }
    else{
        res.end("page not found");
    }
})
server.listen(3000);