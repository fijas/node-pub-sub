var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.send('<h1>Hello world</h1>');
});

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
		console.log('user disconnected');
	});
	socket.on('test_event', function(msg){
		io.emit('test_event', msg);
		console.log('message: ' + msg);
	});
});

http.listen(8988, function () {
    console.log('listening on *:8988');
});
