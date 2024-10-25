const http = require('http');

const setupServer = require('./server-setup');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(setupServer);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
