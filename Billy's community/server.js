// server.js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));

const messages = []; // Store chat history here

io.on('connection', (socket) => {
    console.log('A user connected');

    // Send chat history to new users
    socket.emit('chatHistory', messages);

    socket.on('joinChat', (username) => {
        socket.username = username;
    });

    socket.on('chatMessage', (msg) => {
        messages.push(msg); // Save message to chat history
        io.emit('chatMessage', msg); // Broadcast message to all users
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
