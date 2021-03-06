var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile('./public//index.html');
});

/*
io.on('connection', function(socket){
    console.log('a user connected');
});
*/
/*
io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
    });
});
*/

io.on('connection', function(socket) {
    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });
});

http.listen(process.env.PORT || 3000, function(){
    console.log('listening on process.env.PORT || *:3000');
});