// Обьединяет js файлы в один и переносит файл в папку dist/js

module.exports = function () {

  $.gulp.task("scripts", () => {

    return $.gulp.src($.config.paths.js + '*.{ts,js}')
      .pipe($.webpack({
        mode: $.config.toggle.mode,

        /** точки входа **/
        entry: {

          // каркас общий
          main: {
            import: './src/js/main.ts'
          },

          // слайдер
          'slick' : 'slick-carousel',

          // календарь
          'datepicker' : 'jquery-ui/ui/widgets/datepicker',

          // валидация
          'validation' : {
            import : ['jquery-validation', 'jquery-validation/dist/additional-methods'],
          },

          // выпадающий список
          'select2' : 'select2',
        },

        /** точки выхода **/
        output: {
          filename: '[name].js'
        },

        /** берет зависимость из среды пользователя **/
        externals: {
          // jquery: 'jQuery',
        },

        /** оптимизация **/
        optimization: {
          runtimeChunk: 'single',
          splitChunks: {
            // chunks: 'all',
          },
        },

        /** если есть два файла с одинаковым названием, но разным расширением. выберется файл в порядке extensions **/
        resolve: {
          extensions: ['.ts', '.js'],
        },

        watch: false,
        devtool: 'source-map',
        module: {
          rules: [
            // для ts файлов
            {
              test: /\.tsx?$/,
              use: 'ts-loader',
              exclude: /node_modules/,
            },

            // для js файлов
            {
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: [['@babel/preset-env', {
                    debug: true,
                    corejs: 3,
                    useBuiltIns: "usage"
                  }]]
                }
              }
            },

            // делает jquery модуль глобальным
            // {
            //   test: require.resolve("jquery"),
            //   loader: "expose-loader",
            //   options: {
            //     exposes: ["$", "jQuery"],
            //   },
            // },
          ]
        }
      }))
      .pipe($.gulp.dest($.config.output.pathJs))
      .on("end", $.browserSync.reload);

  });
}
