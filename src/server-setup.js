
const setupServer = (req, res) => {
    if (req.url === '/') { 
        res.statusCode = 200;
        res.end('Hello, World!\n');
    } else if (req.url === '/user') { 
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('This is sudheer\n'); 
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('404 Not Found\n');
    }
};

module.exports = setupServer;
