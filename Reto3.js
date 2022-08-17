const fs = require("fs/promises");
const readline = require("readline")

persona()

async function persona() {
    try {
        let person = { name: "", surname: "", age: null };

        person.name = await Info("what is your name?");
        person.surname = await Info("What is your surname?");
        person.age = await Info("What is your age?")

        await fs.writeFile("persona.json", JSON.stringify(person));
        person = JSON.parse(await fs.readFile("persona.json"))

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

