const fs = require("fs/promises");
const readline = require("readline")

let person = {
    name: "Antonio",
    surname: "Diaz",
    age: 27
};


fs.writeFile('persona.json', JSON.stringify(person))
    .then(() => {
        return fs.readFile('persona.json', 'utf8')
    })
    .then(person => {
        console.log(JSON.parse(person));
    })
    .catch(err => {
        console.log(err);
    })
