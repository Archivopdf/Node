const { log } = require("console");
const fs = require("fs/promises");
const readline = require("readline")

let file = "./person.json";
let person = {
    name: "Antonio",
    surname: "Diaz",
    age: 27
};

write();

async function write() {
    try {
        await fs.writeFile(file, JSON.stringify(person))

        console.log("Name : ", jsonPersona.name);
        console.log("Surname : ", jsonPersona.surname);
        console.log("Age : ", jsonPersona.age);

    } catch (err) {
        console.log(err);
    }
}