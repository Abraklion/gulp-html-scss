// Открывает слежку за файлами

module.exports = function () {

  $.gulp.task('watcher', (done) => {

    $.gulp.watch($.config.watch.html, $.gulp.series("html"));
    $.gulp.watch($.config.watch.fonts, $.gulp.series("fonts"));

    done();
  });
}
