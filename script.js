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

// fs.rename("song.txt", "favSong.txt", function(err){
//     if(err) console.log(err);
//     else console.log("file renamed");
// })

// fs.unlink("favSong.txt", function(err){
//     if(err) console.log(err);
//     else console.log("file deleted");
// })

// fs.mkdir("movie.txt",function(err){
//     if(err) console.log(err);
//     else console.log("folder created");
// })

// fs.readdir("movie", {withFileTypes: true}, function(err, files) {
//     if (err) console.log(err);
//     else console.log(files);
// })

// fs.rm("movie",{recursive:true}, function(err){
//     if(err) console.log(err);
//     else console.log("folder deleted");
// })

// fs.writeFileSync("latur.txt","nilanga rice" );

// fs.readFileSync("latur.txt","utf8");
// console.log("pune");

fs.unlink("latur.txt", function(err){
    if(err) console.log(err);
    else console.log("file deleted");
})

fs.unlink("movie.txt", function(err){
    if(err) console.log(err);
    else console.log("file deleted");
})
