var express = require('express'),
    path    = require('path');

var app = new express();
var port = 3000;

app.listen(port, function(){
	console.log('listening on port', port);
});

app.get('/', function(req, res) { 
	res.sendFile(path.join(__dirname + '/home.html'));
});

app.get('/about', function(req, res) {
        res.sendFile(path.join(__dirname + '/about.html'));
});

app.get('/contact', function(req, res) {
        res.sendFile(path.join(__dirname + '/contact.html'));
});

app.get('/error', function(req, res, err) {
	res.sendFile(path.join(__dirname + '/error.html'));
});
