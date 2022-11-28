module.exports = function () {
  $.gulp.task("html", () => (
    $.gulp.src(`${$.dir.src}**/*.html`)
      .pipe($.gulp.dest(`${$.dir.build}`))
      .pipe($.browserSync.reload({
        stream: true
      }))
  ));
};
