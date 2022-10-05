let express = require('express');
let app = express();
var path = require('path');

console.log("Hello World")
app.get("/", function(req, res){
    absolutePath = path.join(__dirname, "views/index.html")
    res.sendFile(absolutePath)
})




































 module.exports = app;
