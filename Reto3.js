
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


let one = JSON.stringify(person);

console.log(person);
try {
    fs.unlinkSync('test.json')
    console.log("File removed successfully");

} catch (err) {
    console.error('Something wrong happened removing the file');
}

fs.writeFile("test.json", one, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File written successfully");
        console.log(fs.readFileSync("test.json", "utf8"));
    }
});