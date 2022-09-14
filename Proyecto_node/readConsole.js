var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export function readConsole(callback) {


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

                callback(person)

                rl.close();
            })
        });

    });

}