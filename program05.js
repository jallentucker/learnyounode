var http = require('http');
var fs = require('fs');

// var res = process.argv[3];

var server = http.createServer(function (req, res) {
  var responseFile = fs.createReadStream(process.argv[3]);
  responseFile.pipe(res);
  // server.close();
});

server.listen(process.argv[2]);
