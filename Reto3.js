const fs = require("fs/promises");
const readline = require("readline")

let file = './person.json'

person()

async function person() {
    try {
        let person = { name: "", surname: "", age: "" };

        person.name = await Info("what is your name?");
        person.surname = await Info("What is your surname?");
        person.age = await Info("What is your age?")

        await fs.writeFile("persona.json", JSON.stringify(person));
        person = JSON.parse(await fs.readFile("persona.json"))

        person = JSON.parse(await fs.readFile(file));
        console.log("Name : ", person.name);
        console.log("Surname : ", person.surname);
        console.log("Age : ", person.age);

    } catch (err) {
        console.log(err);
    }
}

function Info(ask) {
    const data = new Promise((resolve, reject) => {
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

