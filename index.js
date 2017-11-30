var express=require("express");
var app=express();
app.use(express.static("public"));
var server=app.listen(3000,function(){
  console.log("Server is listening to port 3000");
});
var socket=require("socket.io");
var io=socket(server);
app.get("/",function(req,res){
  res.sendFile(__dirname+"/public/server.html");
})

io.on("connection",function(socket){

  console.log("Connection is made "+socket.id);

  socket.on("chat",function(data){

    

    io.sockets.emit("chat",data);

  socket.on("typing",function(data){
    socket.broadcast.emit("typing",data);
  })
  })
})
