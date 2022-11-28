module.exports = function () {
  $.gulp.task("watch", () => (
    $.gulp.watch(
      `${$.dir.src}**/*.html`,
      $.gulp.series("html")
    ),
    $.gulp.watch(
      `${$.dir.src}styles/**/*.scss`,
      $.gulp.series("css")
    ),
    $.gulp.watch(`${$.dir.src}scripts/**/*.js`, $.gulp.series("js")),
    $.gulp.watch(`${$.dir.src}images/**/*`, $.gulp.series("images")),
    $.gulp.watch(`${$.dir.src}fonts/**/*`, $.gulp.series("fonts"))
  ));
};
