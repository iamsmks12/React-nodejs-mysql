var http = require('http');
var url = require('url');

//create a server object:
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  var q = url.parse(req, true);
  res.write(q.host);
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080