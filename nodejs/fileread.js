var fs = require('fs');
fs.readFile('sample.txt', 'utf-8', function(err, data) {
  console.log(data);
});
// 아직은 원리를 모름, 익숙해지자.
