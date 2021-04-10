// Удаляет папку dist

module.exports = function () {

  $.gulp.task('clean', function () {

    return $.del($.config.output.path);

  });
}
