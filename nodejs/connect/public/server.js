var connect = require('connect'); // npm install connect
var http = require('http'); // http module

var app = connect();

function home(){
    console.log('Home Page');
}

app.use('/', home);

http.createServer(app).listen(8888);

console.log('Server is running....');