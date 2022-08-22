const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io').Server(http);

app.listen(3000, function() {
    console.log('Server Started');
});