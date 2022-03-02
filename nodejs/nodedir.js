var testFolder = '../data'; //../ (상위 directory) ./ (현재 directory)
var fs = require('fs');

fs.readdir(testFolder, function(error, filelist){
  console.log(filelist);
});
// nodejs는 특정 directory에 있는 파일의 목록을 배열의 형식으로 전달한다.
// 이 배열을 반복문으로 활용 가능
