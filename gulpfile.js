const gulp = require('gulp');
const bs = require('browser-sync').create();

gulp.task('browser-sync', () => {
  bs.init({
    server: {
      baseDir: './public'
    }
  });
});

gulp.task('watch', ['browser-sync'], () => {
  gulp.watch(['./public/*.js', './public/*.html'])
    .on('change', bs.reload);
})

gulp.task('default', ['watch'])
