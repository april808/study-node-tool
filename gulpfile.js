const {
  src,
  dest,
  series,
  parallel,
  watch
} = require('gulp');

function defaultTask(cb) {
  console.log('hello gulp4');
  cb();
}

exports.do = defaultTask;


// 檔案搬家任務
function move(){
  return src('index.html').pipe(dist(''))
}


function missionA(cb) {
  console.log('missionA');
  cb();
}


function missionB(cb) {
  console.log('missionB');
  cb();
}


//順序
exports.async = series(missionA , missionB);

//同時
exports.sync = parallel(missionA , missionB);