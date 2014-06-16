var http = require('http');
var bl = require('bl');

var urlData = [];

var readData = function (array) {
  var counter = 0;
  array.forEach(function (url, index) {
    http.get(url, function (stream) {
      stream.pipe(bl(function (err, data) {
        if (err) {console.log(err);}
        urlData[index] = data.toString();
        counter += 1;
        if (counter === 3) {
          urlData.forEach(function (item) {
            console.log(item);
        });
      }
      }));
    });
  }, this);
};

var urls = process.argv.slice(2);

readData(urls);
