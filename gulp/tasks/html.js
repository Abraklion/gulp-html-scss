// Переносит html файлы в папку dist

module.exports = function () {

  $.gulp.task('html', () => {

    return $.gulp.src($.config.paths.html, { base: "src/" })
      .pipe($.gp.plumber())
      .pipe($.gp.pug({
        locals: {
          jsonData: JSON.parse($.fs.readFileSync('./src/templates/data/data.json', 'utf8'))
        }
      }))
      .pipe($.gp.formatHtml())
      .pipe($.gp.if($.config.toggle.minHtml, $.gp.htmlmin({ collapseWhitespace: true })))
      .pipe($.gulp.dest($.config.output.path))
      .pipe($.browserSync.stream());
  });
}

