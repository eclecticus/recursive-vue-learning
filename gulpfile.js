const gulp = require('gulp');
const bs = require('browser-sync').create();

gulp.task('browser-sync', () => {
  bs.init({
    server: {
      baseDir: './public'
    }
  });
});

gulp.task('default', ['browser-sync'])
