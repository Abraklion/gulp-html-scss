"use strict";

global.$ = {
  gulp: require('gulp'),
  gp: require('gulp-load-plugins')(),
  browserSync: require('browser-sync').create(),
  panini: require('panini'),

  config: {
    src: require('./gulp/config'),

    toggle: {
      fullHtml: false, // true / false
      fullCss: false, // true / false
      fullJs: false, // true / false
      resizeImg: false, // true / false
    },

    paths: {
      html: 'src/*.html',
      css: 'src/assets/sass/style.scss',
      js: 'src/assets/js/*.js',
      images: {
        img: 'src/assets/img/',
        webp: 'src/assets/img/webp/',
        svg: 'src/assets/img/svg/**/*.svg'
      },
      fonts: 'src/assets/fonts/'
    },
    output: {
      path: 'dist',
      pathCss: 'dist/assets/css/',
      pathJs: 'dist/assets/js/',
      pathImg: 'dist/assets/img/',
      pathFonts: 'dist/assets/fonts/'
    },
    watch: {
      html: 'src/**/*.html',
      css: 'src/assets/sass/**/*.scss',
      js: 'src/assets/js/**/*.js',
      images: {
        img: 'src/assets/img/*.{jpg,png,gif,svg,ico,webp}',
        webp: 'src/assets/img/webp/*.{jpg,png,gif}',
        svg: 'src/assets/img/svg/**/*.svg'
      }
    }
  }
}

$.config.src.forEach(function (path) {
  require(path)();
});
