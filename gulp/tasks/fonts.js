module.exports = function () {
  $.gulp.task("fonts", () => (
    $.gulp.src(`${$.dir.src}fonts/**/*`)
      .pipe($.gulp.dest(`${$.dir.build}fonts`))
  ));
};
