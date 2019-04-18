"use strict";

let http = require('http');
//const port = 3000;
var port = process.env.PORT||3000;
var host = process.env.HOST||"0.0.0.0";

let server = http.createServer(requestHandler);

function requestHandler(request, response) {
  const userAgent = request.headers['user-agent'];

  console.log(userAgent);

  if(request.url === '/hello' && request.method === 'GET') {
    return response.end('world');
  }

  if(request.url === '/hello' && request.method === 'POST') {
    return response.end('world created');
  }

  if(request.url === '/hello' && request.method === 'PUT') {
    return response.end('world updated');
  }

  if(request.url === '/hello' && request.method === 'DELETE') {
    return response.end('world deleted');
  }
}

server.listen(port, function(err){
  if (err) {
    return console.error('Something bad happened', err);
  }

  console.log(`server is listening on ${host}:${port}`);
});