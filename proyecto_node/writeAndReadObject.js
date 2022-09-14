const fs = require('fs');

function writeAndReadObject() {

    const promise = new Promise((resolve, reject) => {
        fs.writeFile("person.json", JSON.stringify(person))
            .then(() => {
                return fs.readFile("person.json");
            })
            .then((data) => {
                resolve(JSON.parse(data));
            })
            .catch((err) => {
                reject(err);
            })
    });
    return promise
}

module.exports.writeAndReadObject = writeAndReadObject