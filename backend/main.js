var express = require('express');
var cors = require('cors');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var connectSocket = require('./socketIo');
var db = require('./currencyDb');

app.use(cors({origin: true, credentials: true}));

var port = Number(process.env.npm_config_port) || 1337;

server.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
});

const sockets = connectSocket(io);
db((data) => sockets.notifyClients('currency', data));