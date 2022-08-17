const http = require("http");

const server = http.createServer(function (request, response) {
    console.log("Request received from client");
    console.log("Request Method: " + request.method);
    console.log("Request URL:" + request.url);
    console.log("Response Status Code: " + response.statusCode);
    response.writeHead(200, { "Content-Type": "text/plain" });
    console.log(JSON.stringify(response.statusCode + "{ ok: true, message:'Recibido!'}"));
    response.write("Hello from server");
    response.end()
});

server.listen(3000);

