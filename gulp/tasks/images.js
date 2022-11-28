module.exports = function () {
  $.gulp.task('images', () =>
    $.gulp.src(`${$.dir.src}images/**/*.{png,jpg,gif,svg}`)
    .pipe($.gulp.dest(`${$.dir.build}images`))
  );
};
