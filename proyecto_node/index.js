const readConsole = require("./readConsole");
const writeAndReadObject = require("./writeAndReadObject");
const fs = require('fs');

let file = './person.json';

rc.readConsole()
    .then((person) => {
        console.log("Name : ", person.name);
        console.log("Surname : ", person.surname);
        console.log("Age : ", person.age);
        return fs.unlink(file);
    })
    .catch((err) => {
        console.log(err);
    })