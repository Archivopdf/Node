const { request, response } = require("express");
const express = require("express");
const app = express();

app.get('/', function (req, res) {

    console.log("Request received from client");
    console.log("Request URL: " + request.url);
    console.log("Request Method: " + request.method);
    console.log("User agent: " + request.headers["user-agent"]);
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify({ ok: true, message: 'Received' }));
    response.end
});

app.get('/bye', function (request, response) {
    console.log('Request received from client');
    console.log('Request URL: ' + request.url);
    console.log('Request Method : ' + request.method);
    console.log('User-agent : ' + request.headers["user-agent"]);
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify({ ok: true, message: 'bye' }));
    response.end();
})

app.listen(3000)