const fs = require('fs');

// fs.writeFile("song.txt", "kya khoop lagti ho badi sandat dikhati ho", function(err){
//     if(err) console.log(err);
//     else console.log("file created");
// })

fs.readFile("song.txt",'utf8' ,function(err, data){
    if(err) console.log(err);
    else console.log(data);
})