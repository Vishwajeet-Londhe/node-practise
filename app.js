const http = require('http');

var server = http.createServer(function(req, res){
    res.end("kuchh nahi baas chal raha hai, ye to magic hai bidu");
})

server.listen(3000);