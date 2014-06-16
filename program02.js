var http = require('http');
var bl = require('bl');

// var wholeString = '';

http.get(process.argv[2], function(stream) {
  // stream.setEncoding('utf8');
  // stream.on('data', function(data) { wholeString += data; });
  // stream.on('error', console.error);
  // stream.on('end', function() {
    stream.pipe(bl(function(err, data) {
      console.log(data.toString().length);
      console.log(data.toString());
    }))
    // console.log(wholeString.length);
    // console.log(wholeString);
  // });
});
