// Открывает слежку за файлами

module.exports = function () {

  $.gulp.task('watcher', (done) => {

    $.gulp.watch($.config.watch.html, $.gulp.series("html"));
    $.gulp.watch($.config.watch.fonts, $.gulp.series("fonts"));
    $.gulp.watch([$.config.watch.images.img, $.config.watch.images.webp], $.gulp.series("images"));
    $.gulp.watch($.config.watch.images.svg, $.gulp.series("sprite"));

    done();
  });
}
