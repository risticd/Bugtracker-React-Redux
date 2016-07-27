/*
  gulpfile.js
  ===========
  Rather than manage one giant configuration file responsible
  for creating multiple tasks, each task has been broken out into
  its own file in gulp/tasks. 

  To add a new task, simply add a new task file the gulp directory.
*/

'use strict';

var gulp = module.exports = require('gulp');
var config = require('./gulp/__config.js');

// List of all custom gulp tasks
var tasks = [
    './gulp/generate.js'
];

// Load each custom task
tasks.forEach(function(task) {
    require(task)(gulp, config);
});

// Default task
gulp.task('default', ['generate']);
