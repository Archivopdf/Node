
function writeAndRead(path, obj) {

    var fs = require('fs');

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
}