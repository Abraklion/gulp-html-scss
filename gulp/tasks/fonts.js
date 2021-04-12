// Переносит шрифты формата woff,woff2 в папку dist/assets/fonts

module.exports = function () {
  $.gulp.task('fonts', function () {
    return $.gulp.src($.config.paths.fonts + '*.{woff,woff2}')
      .pipe($.gulp.dest($.config.output.pathFonts))
      .pipe($.browserSync.stream());
  });
}
