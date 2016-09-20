require('babel-register');

var express = require('express');
var app = express();
var path = require('path');
var compression = require('compression');

// // uncomment to force https

// app.use (function (req, res, next) {
//   if(req.headers["x-forwarded-proto"] === "https" || req.hostname === 'localhost'){
//     return next();
//   };
//   res.redirect('https://'+req.hostname+req.url);
// });

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(compression());
app.use(express.static(path.join('./')));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(process.env.PORT || 3002, function(){
  console.log('server started');
});
