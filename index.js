var fs = require('fs');
var http = require('http');

var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/') {

        fs.readFile('index.html', function (err, html) {
            response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
            response.write(html);
            response.end();
        });
    } else {
        response.statusCode = 404;
        // response.write('<img src="blad.gif">');  // --> Niw wiem jak tu ustawić ścieżkę do lokalnego obrazka :-(
        response.write('<img src="http://macura.co/pliki/kodilla/blad.gif">');
        response.end();
    }
});
// server.listen(8080);
server.listen(9000);