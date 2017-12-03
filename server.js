var http = require('http');
function requestListener(request,response){
		console.log("User's request : "+request.url);
		response.writeHead(200,{"Content-Type" : "text/plain"});
		response.write("Hello everyone !");
		response.end();
}
http.createServer(requestListener).listen(8888);
console.log("Server is now running...");