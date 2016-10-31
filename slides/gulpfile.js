// task runner -- use this on Windows
'use string';

var gulp = require('gulp');
var help = require('gulp-task-listing');
var cp = require('child_process');
var sync = require('browser-sync');
var repos = {
  staging: {
    url: 'git@github.com:tamouse/practical-php-primer-course.git',
    branch: 'gh-pages'
  }
};
var buildDir = '_site';
gulp.task('help', help);
gulp.task('default', help);
gulp.task('build', function () {
  //return cp.spawn('bundle', ['exec', 'jekyll', 'build'], {stdio: 'inherit'});
  return cp.execSync('bundle exec jekyll build', {stdio: 'inherit'})
});
gulp.task('build:stage', function () {
  //return cp.spawn('bundle', ['exec', 'jekyll', 'build'], {stdio: 'inherit'});
  return cp.execSync('bundle exec jekyll build --config=_config.yml,_staging.yml', {stdio: 'inherit'})
});
gulp.task('push:stage', function () {
  // return cp.execSync('' );
});

gulp.task('serve', ['build'], function(){
    sync.init({
        server: './_site'
    });
    gulp.watch([
       '*.html',
       '_includes/**.*',
       '_data/**.*',
       '_layouts/**/*',
       '_sass/**.*',
       '_slides/**/*',
       'css/**/*',
       'js/**/*',
       'images/**/*',
       '_config.yml'
   ],
   ['build'])
});
gulp.task('stage', ['build:stage', 'push:stage'], function () {
  console.log('pushed to staging')
});
