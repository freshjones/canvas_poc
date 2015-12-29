var gulp              = require('gulp');
var concat            = require("gulp-concat");
var livereload        = require('gulp-livereload');
var connectlr         = require('connect-livereload')();

var EXPRESS_PORT      = 4000;
var EXPRESS_ROOT      = __dirname;
var LIVERELOAD_PORT   = 35729;

// Let's make things more readable by
// encapsulating each part's setup
// in its own method
function startExpress() 
{
  var express = require('express');
  var app = express();
  app.use(connectlr);
  app.use(express.static(EXPRESS_ROOT));
  app.listen(EXPRESS_PORT);
}

// We'll need a reference to the tinylr
// object to send notifications of file changes
// further down

function startLivereload() 
{
  livereload.listen();
}

gulp.task('html', function() 
{
  livereload.reload()
});

gulp.task('js', function () 
{
  gulp.src('./activities/**/*.js')
    .pipe(gulp.dest('js'))
    .pipe(livereload());
});


// Default task that will be run
// when no parameter is provided
// to gulp
gulp.task('default', function () {

  startExpress();
  startLivereload();
  gulp.watch('index.html', ['html']);
  gulp.watch(['./**/*.js'], ['js']);

});