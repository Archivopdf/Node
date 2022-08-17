
var readline = require('readline');
var fs = require('fs');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const person = {
    name: "",
    surname: "",
    age: ""
};

rl.question("What is your name? ", (name) => {

    console.log(person.name = name);

    rl.question("What is you username? ", (surname) => {

        console.log(person.surname = surname);

        rl.question("What is you age? ", (age) => {

            console.log(person.age = age);

            let dato = JSON.stringify(person);

            fs.writeFile("test.JSON", dato, () => {

                fs.readFile("test.JSON", () => {

                    console.log(JSON.parse(dato));
                })
            })

            rl.close();
        })
    });

});