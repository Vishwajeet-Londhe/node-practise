// const http = require('http');

// var server = http.createServer(function(req, res){
//     res.end("kuchh nahi baas chal raha hai, ye to magic hai bidu");
// })

// server.listen(3000);


// routing function

const http = require('http');

const server = http.createServer(function(req, res){
    if(req.url === '/'){
        res.end("h5i");
    }
    else{
        res.end("page not found");
    }
})
server.listen(3000);