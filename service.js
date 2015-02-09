var express = require('express');
var app = express();
var port = 8080;

app.use(express.static(__dirname + '/public'));

app.get('/interest_rate', function(req, res) { //GET endpoint
	var randomNumber = Math.floor(Math.random() * 2000) / 100
	res.json(randomNumber);
})

app.listen(port, function() {
	console.log('Now listening on port ' + port);
})


// var P = ;
// var r = ;
// var t = ;
// var A = P * r * t;