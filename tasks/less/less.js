var gulp = require('gulp');

var sass = require('gulp-sass');
var watch = require('gulp-watch');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();

gulp.task('generateLess', function () {
  return gulp.src('./src/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('./build/css/'))
    .pipe(browserSync.stream());
});

// Logs Message
gulp.task('message', function(){
  return console.log('Gulp is running...');
});
