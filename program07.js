var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
  var parsedURL = url.parse(req.url, true);
  if (req.method !== 'GET') {
    return res.end('Send GET request');
  }

  if (parsedURL.pathname === '/api/parsetime') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var date = new Date(parsedURL.query.iso);
    var returnObj = {};
    returnObj.hour = date.getHours();
    returnObj.minute = date.getMinutes();
    returnObj.second = date.getSeconds();
    res.end(JSON.stringify(returnObj));
  }
  if (parsedURL.pathname === '/api/unixtime') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var unixObj = {unixtime: Date.parse(parsedURL.query.iso)};
    res.end(JSON.stringify(unixObj));
  }
  else {
    res.writeHead(404);
    return res.end('Invalid path name');
  }
});


server.listen(process.argv[2]);
