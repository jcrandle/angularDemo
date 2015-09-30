'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream;
var _ = require('lodash');

var war = require('gulp-war');
var zip = require('gulp-zip');

gulp.task('war', ['clean', 'build'], function () {
    gulp.src(["dist/**/*"])
        .pipe(war({
            welcome: 'index.html',
            displayName: 'Grunt WAR',
        }))
        .pipe(zip('angularDemo.war'))
        .pipe(gulp.dest("./target"));

});
