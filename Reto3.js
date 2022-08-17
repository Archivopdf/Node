const express = require("express");
const app = express();

app.get('/', function (req, res) {
    res.send('Hello from server');
    console.log("Request received from client");
    console.log("Request URL: " + request.url);
    console.log("Request Method: " + request.method);
    console.log("User agent: " + );
});

app.listen(3000)