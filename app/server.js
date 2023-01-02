var express=require("express")
var app=express()
var path=require("path")
app.get('/',function(req,resp){
resp.sendFile(path.join(__dirname +'/public/art.html'))
});
console.log("You are on port no 3000");
app.listen(3000)
