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

const path = require('path');
const filePath = 'C:\project\NodeJS\index.js';
const fileName = path.basename(filePath);
console.log(fileName);