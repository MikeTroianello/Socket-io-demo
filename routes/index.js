var express = require('express');
var router = express.Router();

// var app = express();

var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

module.exports = router;
