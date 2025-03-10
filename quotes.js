const fs = require('fs');

//quotes object module scaffolding
const quotes = {};

//Get all the quotes and return them to the user
quotes.allQuotes = function allQuotes(){
    const fileContents = fs.readFileSync(`${__dirname}/quote.txt`, 'utf8');

    // Turn the string into an array
    const arrayOfQuotes = fileContents.split(/\r?\n/);
    return arrayOfQuotes;
}

//export

module.exports = quotes;