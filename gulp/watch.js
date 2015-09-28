'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

function isOnlyChange(event) {
  return event.type === 'changed';
}

gulp.task('watch', ['markups', 'inject'], function () {

  gulp.watch([path.join(conf.paths.src, '/*.html'), 'bower.json'], ['inject']);

  // Stylesheets
  gulp.watch([
    path.join(conf.paths.src, '/assets/css/**/*.css'),
    path.join(conf.paths.src, '/assets/css/**/*.scss')
  ], function(event) {
    if(isOnlyChange(event)) {
      gulp.start('styles');
    } else {
      gulp.start('inject');
    }
  });

  // Non-AngularJS js files
  gulp.watch([
    path.join(conf.paths.src, '/assets/js/**/*.js'),
  ], function(event) {
    if(isOnlyChange(event)) {
      gulp.start('scripts');
    } else {
      gulp.start('inject');
    }
  });

  // Handlebar templates
  gulp.watch(path.join(conf.paths.src, '/app/**/*.hbs'), ['markups']);

  // AngularJS html files
  gulp.watch(path.join(conf.paths.src, '/app/components/**/*.html'), function(event) {
    browserSync.reload(event.path);
  });
  
  // AngularJS js files
  gulp.watch(path.join(conf.paths.src, '/app/components/**/*.js'), function(event) {
    browserSync.reload(event.path);
  });






});
