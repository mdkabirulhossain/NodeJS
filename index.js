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


//Here are two option one is syncronous and another one is asyncronous. We always try to write asyncronus way. And asyncronus it's bydefault behaviour for nodejs.
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

// const http = require('http');
// const server = http.createServer((req, res)=>{
//     if( req.url === '/'){
//         res.write(`
//             <html> 
//             <head>
            
//             <title> Form </title>
//             <head> 
//             </html>
            
//             `);

//         res.write(`
//             <body>
//             <h1> Enter the input text:</h1>
//             <form method='post' action='/process'>
//             <input name= "message" />
//             </form>
            
//             </body>
//             `)
//         res.end();
//     }
//     else if(req.url === '/process' && req.method === "POST"){

//         const body = [];
//         req.on('data', (chunk)=>{
//             body.push(chunk);
//         })
//         req.on('end', () => {
//             console.log("Stream finished");
//             const parseBody = Buffer.concat(body).toString();
//             console.log(parseBody);
//             res.write("Thank you for submitting");
//             res.end();
//         });
        
//     } else{
//         res.write("Page Not found!!!!!!!");
//         res.end();
//     }
// });

// server.listen(3000);
// console.log("Server is running on port 3000");


//Writestream

//Read data from one file and write other file
// const fs = require('fs');
// const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`, 'utf8');
// const ourWriteStream = fs.createWriteStream(`${__dirname}/output.txt`, 'utf8');

// // ourReadStream.on('data', (data) =>{
// //     ourWriteStream.write(data);
// // })

// //Write data using pipe

// ourReadStream.pipe(ourWriteStream);



//###     For better understanding ReadStream and WriteStream

// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res)=>{
//     const myReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`, 'utf8');

//     myReadStream.pipe(res);

// });

// server.listen(3000);
// console.log('Server is running on port number 3000');


// ######### Concept of req and res  #############
// req (Incoming HTTP Request)
// req is a Readable Stream → We read data sent by the client.
// It contains:
// Request URL (req.url) → Identifies the requested resource.
// HTTP Method (req.method) → e.g., GET, POST, etc.
// Headers (req.headers) → Additional request info.
// Body Data (for POST, PUT, etc.) → Received in chunks and read using req.on('data', callback).


// res (Outgoing HTTP Response)
// res is a Writable Stream → We write data back to the client.
// It allows us to:
// Set Headers (res.writeHead(statusCode, headers)) → Defines response type.
// Write Response Data (res.write(data)) → Send content.
// End Response (res.end()) → Marks response completion.


// Breakdown of Key Concepts
// Feature	req (Request) - Readable	res (Response) - Writable
// Purpose	Client → Server data transfer	Server → Client data transfer
// Type	Readable Stream	Writable Stream
// Usage	Read input from client	Send output to client
// Methods	req.url, req.method	res.writeHead(), res.write(), res.end()
// Body Handling	req.on('data', callback), req.on('end', callback)	res.write(data), res.end()


//########### Understanding of NodeJs  ##################

const mathLibrary = require('./math');
const quoteLibrary = require('./quotes');

//App object Module Scaffolding
const app = {};

//configaration

app.config = {
    timeBetweenQuotes: 1000,
};

// Function that prints a random quote

app.printAQuote = function printAQuote(){
    //Get all the quotes
    const allQuotes = quoteLibrary.allQuotes();

    //Get the length of the quotes
    const numberOfQuotes = allQuotes.length;

    //pick a random number between 1 and the number of quotes
    const randomNumber = mathLibrary.getRandomNumber(1, numberOfQuotes);

    //get the quote
    const selectquote = allQuotes[randomNumber - 1];

    //Print the quotes
    console.log(selectquote);
};

// Function that loops indefinitely, calling the printQuote

app.indefiniteLoop = function indefiniteLoop(){
    setInterval(app.printAQuote, app.config.timeBetweenQuotes);
};

//Invoke the loop
app.indefiniteLoop();
