var http = require('http');

var userInput = process.argv[2];

http.get(userInput, function(stream) {
  stream.setEncoding('utf8');
  stream.on('data', console.log);
});
