var http = require('http');
var server = http.createServer( function onRequest(req, res){
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.write('<h1>Hello World</h1>');
  res.end();
}).listen(3000);

