"use strict";

global.$ = {
  gulp: require('gulp'),
  gp: require('gulp-load-plugins')(),
  webpack: require("webpack-stream"),
  browserSync: require('browser-sync'),
  autoprefixer: require('autoprefixer'),
  panini: require('panini'),
  sass: require("gulp-sass")(require('sass')),
  del: require('del'),

  config: {
    src: require('./gulp/config'),

    toggle: {
      mode: 'development', // development / production
      minHtml: false,      // true / false
      fullCss: false,      // true / false
      resizeImg: false,    // true / false
    },

    paths: {
      html: 'src/*.html',
      css: 'src/sass/*.scss',
      js: './src/js/',
      images: {
        img: 'src/assets/img/',
        webp: 'src/assets/img/webp/',
        svg: 'src/assets/img/sprite/**/*.svg'
      },
      fonts: 'src/assets/fonts/',
      other: 'src/assets/other/'
    },
    output: {
      path: 'dist',
      pathCss: 'dist/assets/css/',
      pathJs: 'dist/js/',
      pathImg: 'dist/assets/img/',
      pathFonts: 'dist/assets/fonts/',
      templates: '../templates',
    },
    watch: {
      html: 'src/**/*.html',
      css: 'src/sass/**/*.scss',
      js: 'src/js/**/*.js',
      images: {
        img: 'src/assets/img/*.{jpg,png,gif,svg,ico,webp}',
        webp: 'src/assets/img/webp/*.{jpg,png,gif}',
        svg: 'src/assets/img/sprite/**/*.svg'
      },
      fonts: 'src/assets/fonts/',
      other: 'src/assets/other/'
    }
  }
}

$.config.src.forEach(function (path) {
  require(path)();
});

const build = $.gulp.series('clean', $.gulp.parallel('html','styles','scripts','fonts','images','sprite','copy'));
const watch = $.gulp.series(build, $.gulp.parallel('serve', 'watcher'));

exports.build = build;
exports.watch = watch;

exports.default = watch;
