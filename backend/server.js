require('dotenv').config({ path: '../.env' });

const app = require("./app");
const http = require('http');
const PORT = process.env.PORT || 3000;

app.set('port', PORT);

const server = http.createServer(app);

server.listen(PORT);

server.on('error', (error) => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = typeof PORT === 'string' ? 'Pipe ' + PORT : 'Port ' + PORT;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
});

server.on('listening', () => {
    const addr = server.address();
    const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    console.log('Scoops backend listening on ' + bind + ` (http://localhost:${PORT})`);
});