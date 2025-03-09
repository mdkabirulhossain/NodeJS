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

//  const fs = require('fs');
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

// 4. Node.js Events Module

// const EventEmitter = require('events');

// const emitter = new EventEmitter();

// //register a listener for bellRing
// emitter.on('bellRing', ()=>{
//     console.log("Listener for bellRing event!!");
// });

// //raise an event
// emitter.emit('bellRing');


// //register a listener for bellRing event
// emitter.on('bellRing', (period)=>{
//     console.log(`We need to run because ${period}`);
// })

// //raise an event
// setTimeout(()=>{
//     emitter.emit('bellRing', 'second period ended');
// }, 2000);


//Now raise event situated on the different file shool.js
//  const School = require ('./school');

//  const school = new School();

//  //register a listener for bellRing event
//  school.on('bellRing', ({period, text})=>{
//     console.log(`We need to run because ${period} ${text}`);
//  });

//  school.startPeriod();



// 5. Node.js http Module

// const { Socket } = require('dgram');
// const http = require('http');
// const server = http.createServer((req, res)=>{
//     if( req.url === '/'){
//         res.write("Hello guys!!");
//         res.end();
//     }
//     else if(req.url === '/about'){
//         res.write("Hello guys!! Welcome to the about page.");
//         res.end();
//     } else{
//         res.write("Page Not found!!!!!!!");
//         res.end();
//     }
// });

// // // on meanse listener
// // server.on('connection', (Socket)=>{
// //     console.log("conected ...");
// // })

// server.listen(3000);
// console.log("Listening on port 3000");


//###########      Stream & Buffer ##########################

//Readstream

// const fs = require('fs');
// const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`, 'utf8');

// ourReadStream.on('data', (data) =>{
//     console.log(data);
// })

const http = require('http');
const server = http.createServer((req, res)=>{
    if( req.url === '/'){
        res.write(`
            <html> 
            <head>
            
            <title> Form </title>
            <head> 
            </html>
            
            `);

        res.write(`
            <body>
            <h1> Enter the input text:</h1>
            <form method='post' action='/process'>
            <input name= "message" />
            </form>
            
            </body>
            `)
        res.end();
    }
    else if(req.url === '/process' && req.method === "POST"){

        const body = [];
        req.on('data', (chunk)=>{
            body.push(chunk);
        })
        res.on('end', ()=>{
            console.log("Stream finished");
            console.log(body);
        })
        res.end();
    } else{
        res.write("Page Not found!!!!!!!");
        res.end();
    }
});

server.listen(3000);
console.log("Server is running on port 3000");