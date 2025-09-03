const express = require('express');
const http = require('http');
const {Server} = require('socket.io')
const app = express();
const server = http.createServer(app);
const io = new Server(server);
const PORT = process.env.PORT || 7005;

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('A user connected');

    setInterval(() => {
        socket.emit('number', parseInt(Math.random() * 10));
    }, 1000);

    socket.on('disconnect', () => {
        console.log('A User Disconnected');
    });
});

server.listen(PORT, () => {
  console.log("App listening to: " + PORT);
});