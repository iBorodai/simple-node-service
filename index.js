const http = require('http');
const fs = require('fs');

const hostname = '0.0.0.0';
const port = 3000;

const htmlAnswer = fs.readFileSync('./ans.html');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(htmlAnswer);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});