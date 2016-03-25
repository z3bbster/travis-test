var gulp = require('gulp')
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

gulp.task('default', function() {
  console.log('DEFAULT task!');
});

gulp.task('travis', function() {
  return gulp.src('./index.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});