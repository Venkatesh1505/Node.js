var connect = require('connect');
var http = require('http');
var app = connect();

function doFirst(request,response,next){
	response.writeHead(200,{"Content-Type" : "text/plain"});
	response.write("Hello venky");
	console.log("Venky");
	next();
	response.end();
}
function doSecond(request,response,next){
	response.writeHead(200,{"Content-Type" : "text/plain"});
	response.write("Hello naga");
	console.log("Naga");
	next();
	response.end();
}
app.use('/venky',doFirst);
app.use('/naga',doSecond);
http.createServer(app).listen(8888);
console.log("Server is running....");