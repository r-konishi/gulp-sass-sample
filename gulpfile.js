var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnext = require('gulp-cssnext');

var paths = {
  'scss': 'sass/',
  'css': 'public/stylesheets/'
};

gulp.task('scss', function() {
  return gulp.src(paths.scss + '**/*.scss')
    .pipe(sass())
    .on('error', function(err) {
      console.log(err.message);
    })
    .pipe(cssnext({
      browsers: 'last 1 version, > 10%'
    }))
    .pipe(gulp.dest(paths.css));
});
