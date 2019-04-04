var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');
var sys = require('sys')
var exec = require('child_process').exec;
var timestamp;

var drawPath = "draw.jpg";
var renderPath = "result.jpg";

    
io.on('connection', function (socket) {
  console.log("Socket initialized");

  socket.on('requestData', function (data) {
    socket.emit('getData', {data:""});
    var address = data.address;
    var cmd_sendEmail = "python send_email.py "+address+" public/gallery/render/r"+timestamp+".jpg"
    exec(cmd_sendEmail, function (error, stdout, stderr) {
            console.log("email has been sent to " + address);
          });
  });   
 
  socket.on('sendData', function (data) { 
    timestamp = new Date().getTime();
    var cmd_generate = "sh inference.sh"; 
    var cmd_copyDrawing = "cp "+drawPath+" "+__dirname+"/public/gallery/drawing/d"+timestamp+".jpg";
    var cmd_copyRender  = "cp "+renderPath+" "+__dirname+"/public/gallery/render/r"+timestamp+".jpg";
    var imgFile = data.image.replace(/^data:image\/png;base64,/, "");
    var generated_img = "/public/gallery/drawing/d"+timestamp+".jpg"

    fs.writeFile(drawPath, imgFile, 'base64', function(err) {
      exec(cmd_generate, function (error, stdout, stderr) {
        console.log("generated image");
        exec(cmd_copyDrawing, function (error, stdout, stderr) {
          console.log("copied sketch image to public")
          exec(cmd_copyRender, function (error, stdout, stderr) {
            console.log("copied render image to public")
            socket.emit('newImageGenerated', {timestamp:timestamp}); 
          });
        });
      });
    });
  });    
 
  // error handling
  socket.on('err', function (data) {
    socket.broadcast.emit('err', data); // send back to client
  });
});

app.use(express.static(__dirname + '/public'));

server.listen(process.env.PORT || 8000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('app listening at http://%s:%s', host, port);
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});


