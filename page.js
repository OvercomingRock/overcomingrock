var express = require('express');

var page = express();

page.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');

});

page.listen(3000);
