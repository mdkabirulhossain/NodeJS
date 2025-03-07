var people = ['Kabirul', 'Rakin', 'Kawser'];
let a = 5;

// module.exports = people;
//Now when from other file require people.js file they only get people array not the value of a bcz here export only people array

//Export multiple value
module.exports = {
    people: people,
    a: a
}
