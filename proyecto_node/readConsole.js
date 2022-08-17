const readline = require("readline");


function readConsole() {

    const promise = new Promise((resolve, rejects) => {
        let person = { name: null, surname: null, age: null };
        Info('What is your name?')
            .then((answer) => {
                person = answer;
                return Info('What is your surname?');
            })
            .then((answer) => {
                person.surname = answer;
                return Info('What is your age?');
            })
            .then((answer) => {
                person.age = answer;

            });
    });
    return promise
}

function Info(ask) {
    const data = new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(ask, (answer) => {
            resolve(answer);
            rl.close;
        });
    });
    return data;
}

module.exports.readConsole = readConsole