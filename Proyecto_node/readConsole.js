var readline = require('readline');

export function readConsolle() {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    setTimeout(() => {

        setTimeout(() => {

            rl.question('What is your name? ', (name) => {
                console.log(person.name);
                person.name = name;
            })

        });

        setTimeout(() => {
            rl.question('What is your surname? ', (surname) => {
                console.log(person.surname);
                person.surname = surname;
            })
        }, 5000);

        setTimeout(() => {

            rl.question('What is your age? ', (age) => {
                console.log(age);
                person.age = age;
            })
        }, 10000);
    });

    const person = {
        name: "",
        surname: "",
        age: ""
    };
    setTimeout(() => {
        console.log(person);
    }, 20000);
}