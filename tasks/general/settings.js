var gulp  = require('gulp');
var browserSync = require('browser-sync').create();

// compileLess work with less files
// generateCss -> this work

gulp.task('watch' ,['generateCss','generateLess','taskSync'] , function () {
  console.log('Generate, Browser Sync and Symbols');
});
