const http = require('http');

var server = http.createServer(function(req, res){
    res.end("kuchh nahi baas chal raha hai");
})

server.listen(3000);