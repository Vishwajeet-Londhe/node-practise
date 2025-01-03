const fs = require('fs');

// fs.writeFile("song.txt", "kya khoop lagti ho badi sandat dikhati ho", function(err){
//     if(err) console.log(err);
//     else console.log("file created");
// })

// fs.readFile("song.txt",'utf8' ,function(err, data){
//     if(err) console.log(err);
//     else console.log(data);
// })

// fs.appendFile("song.txt", "tarif karonge kaab taak bole kaab taak", function(err){
//     if(err) console.log(err);
//     else console.log("file appended");
// })

fs.rename("song.txt", "favSong.txt", function(err){
    if(err) console.log(err);
    else console.log("file renamed");
})