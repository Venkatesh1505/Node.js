var http = require('http');
var fs = require('fs');
function send404Response(response){
	console.log("inside 404response");
	response.writeHead(404,{"Content-Type" : "text/plain"});
	response.write("Error - 404 Page Not Found !");
	response.end();
}
function requestListener(request,response){
	if( request.method == 'GET' && request.url == '/' ){
		console.log("inside if");
		response.writeHead(200,{"Content-Type" : "text/html"});
		fs.createReadStream("./index.html").pipe(response);
	}
	else{
		console.log("Inside else");
		send404Response(response);
	}
	
}
http.createServer(requestListener).listen(8888);
console.log("Server is now running...");