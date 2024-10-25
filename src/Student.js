const http = require('http');

const students = [
    { id: 1, name: 'Raju', class: '5', age: 10 },
    { id: 2, name: 'Bobby', class: '6', age: 11 },
    { id: 3, name: 'Arun', class: '7', age: 12 },
];

const generateTable = (students) => {
    let table = `
        <h2>School Students Information</h2>
        <table border="1">
            <tr>
                <th>Student ID</th>
                <th>Name</th>
                <th>Class</th>
                <th>Age</th>
            </tr>`;
    
    students.forEach(student => {
        table += `
            <tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.class}</td>
                <td>${student.age}</td>
            </tr>`;
    });

    table += `</table>`;
    return table;
}
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Students Information</title>
            </head>
            <body>
                ${generateTable(students)}
            </body>
            </html>
        `);
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('404 Not Found');
    }
});

const hostname = '127.0.0.1';
const port = 3000;

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
