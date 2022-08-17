const readConsole = require("./readConsole");
const writeAndReadObject = require("./writeAndReadObject");
const fs = require('fs');


try {
    readConsole();

    writeAndReadObject("persona.json");

} catch (err) {

    console.log(err);
}

