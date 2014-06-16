var net = require('net');

var server = net.createServer(function (socket) {
  var twoDigit = function (val) {
    if (val < 10 ) {
      val = '0' + val.toString();
    }
    return val;
  };
  var date = new Date();
  var year = date.getFullYear();
  var month = twoDigit(date.getMonth() + 1);
  var day = twoDigit(date.getDate());
  var hrs = twoDigit(date.getHours());
  var mins = twoDigit(date.getMinutes());
  socket.write(year + '-' + month + '-' + day + ' ' + hrs + ':' + mins + '\n');
  //console.log it
  socket.end();
});

server.listen(process.argv[2]);
