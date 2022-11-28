module.exports = function () {
  $.gulp.task("js", () =>
    $.gulp.src(`${$.dir.src}scripts/main.js`)
      .pipe($.plugins.babel({
        presets: ["@babel/env"]
      }))
      .pipe($.gulp.dest(`${$.dir.build}js`))
      .pipe($.browserSync.reload({
        stream: true
      }))
  );
};
