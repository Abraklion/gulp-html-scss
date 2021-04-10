// Открывает слежку за файлами

module.exports = function () {

  $.gulp.task('watcher', (done) => {

    $.gulp.watch($.config.watch.html, $.gulp.series("html"));

    done();
  });
}
