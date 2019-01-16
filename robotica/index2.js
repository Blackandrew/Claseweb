
/**/ 
var five = require("../lib/johnny-five.js");
var board = new five.Board();

board.on("ready", function() {


});

var express = require('express');
var app = express();
var io = require('socket.io')(index2.listen(8081));
var five = require('johnny-five');

index2.use(express.static(__dirname + '/index2'));
 
index2.get('/', function (req,res) { 
  	res.sendFile(__dirname + '/prueba.html');
});



board.on("ready", function() {

    var speed, commands, motors;
    var servo = new five.Servo(10);

  board.repl.inject({
    servo: servo
  });
  commands = null;

servo.on();
io.on('connection', function (socket) {
    socket.on('abrir', function (){
        servo.on();
        servo.move( 180 );
    });

    socket.on('cerrar', function (){
        servo.on();
        servo.move( 0 );
    });
});
});


