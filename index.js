// var http = require('http');
// http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type' : 'text/plain'});
//     res.end("Hello guys");
// }).listen(4000);


// setTimeout(()=>{
//     console.log('test');
// }, 1000);

// setInterval(()=>{
//     console.log("Hello good people");
// }, 2000)


// const people = require('./people');
// console.log(people.people);
// console.log(people.a);

//Before export it's show empty bcz people stay another file we don't access directly people.js file data that,s called node module system


//###########    Built-in Modules ############### I am following w3schools documentation        ##########

// 1. Node.js Path Module

// const path = require('path');
// const filePath = 'C:/project/NodeJS/index.js';
// const fileName = path.basename(filePath);
// const parse = path.parse(filePath);
// console.log(fileName);
// console.log(parse);


// 2. Node.js OS Module

// const os = require('os');
// console.log("Platform: ", os.platform());
// console.log("User Info: ", os.userInfo());
// console.log("Hostname: ", os.hostname());



// 3. Node.js File System Module

 const fs = require('fs');
//  fs.writeFileSync('demo.txt', "Hello world");
//Syncronous
//const data = fs.readFileSync('demo.txt', 'utf8');
// console.log(data);
//asyncronous
//  fs.readFile('demo.txt', (err, data)=>{
//     if(err) throw err;
//     //Now not pass utf8 that why I using toString here
//     console.log(data.toString());
//  })


//Here are two option one is syncronous and another one is asyncronous. We always try to dus asyncronus it's bydefault behaviour for nodejs.
//readFile asyncronous
//readFileSync syncronous
