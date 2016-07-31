var wget = require('wget');

for (var i = 0; i < 1454; i++) {
  var imageTypes = ['.gif', '.png', '.jpg'];

  for (var j = 0; j < imageTypes.length; j++) {
    var k;
    if (i < 10) {
      k = "000";
    } else if (i < 100) {
      k = "00"
    } else if (i < 1000) {
      k = "0"
    } else {
      k = '';
    }

    var src = 'http://megatokyo.com/strips/' + k + i.toString() + imageTypes[j];
    var output = './mt/' + k + i.toString() + imageTypes[j];
    var options = {};

    var download = wget.download(src, output, options);
    download.on('error', function(err) {});
    download.on('end', function(output) {
      console.log('new file: ', output);
    });
  }

}
