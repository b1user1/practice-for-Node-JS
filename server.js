var express = require('express');
var app = express();


app.get('/', function(req, res){
  res.render('/index.html');
});

app.listen(3000);

// Console will print the message
console.log('Server running at port 3000')