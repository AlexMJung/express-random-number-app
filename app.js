var express = require('express');
var app = express();
var port = 5000;

app.get('/random', function(req, res) {
    var num = randomNumber(1, 10);
    res.send(num.toString(10))
})
app.listen(port)

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}