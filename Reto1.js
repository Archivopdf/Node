const http = require("http");

const server = http.createServer(function (request, response) {
    console.log("Request received from client");
    console.log("Request Method: " + request.method);
    console.log("Request URL:" + request.url);
    console.log("Header Request: " + request.headers.host);

    console.log(" - content-type  : ", request.headers["Content-Type"]);
    console.log(" - content-lenght: ", request.headers["content-length"]);
    console.log(" - user-agent    : ", request.headers["user-agent"]);

    if (request.url == "/") {
        respond = { ok: true, message: "Listo" };
    } else if (request.url == "/bye") {
        respond = { ok: true, message: "bye" };

    }

    console.log("Response Status code:" + response.statusCode);
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify(respuesta));

    response.end()
});

server.listen(3000);

