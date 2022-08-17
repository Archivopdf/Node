const fs = require('fs');

function writeAndReadObject() {

    const promise = new Promise((resolve, reject) => {
        fs.writeFile("persona.json", JSON.stringify(person))
            .then(() => {
                return fs.readFile("persona.json");
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