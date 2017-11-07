var http = require('http'),
    url = require('url'),
    fs = require('fs');

fs.readFile('./public/index.html', function (err, html) {
    if (err) {
        throw err;
    }
    http.createServer(function (request, response) {
        var urlParsed = url.parse(request.url);
        if (urlParsed.pathname == '/' && request.method == 'GET') {
            response.writeHeader(200, { 'Content-Type': 'text/html' });
            response.write(html);
            response.end();
        }
        else {
            response.statusCode = 404;
            response.end('Not Found');
        }
    }).listen(process.env.PORT || 1337);
});