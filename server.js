var express = require("express"),
    app = express();

app.listen(8080, function() {
    console.log('Port: 8080');
})

app.use('/', function(req, res) {
    res.sendFile(__dirname+'/gud.html')
})