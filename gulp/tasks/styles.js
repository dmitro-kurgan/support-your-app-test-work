module.exports = function () {
  const sass = require('gulp-sass')(require('sass'));
  const autoprefixer = require("autoprefixer");
  const processors = [
    autoprefixer()
  ];

  $.gulp.task("css", () =>
    $.gulp.src(`${$.dir.src}styles/main.scss`)
      .pipe($.plugins.sourcemaps.init({
        largeFile: true,
        loadMaps: true
      }))
      .pipe(sass().on('error', sass.logError))
      .pipe($.plugins.postcss(processors))
      .pipe($.plugins.sourcemaps.write('./'))
      .pipe($.gulp.dest(`${$.dir.build}css`))
      .pipe($.browserSync.reload({
        stream: true
      }))
  );
};
