global.$ = {
  dir: {
    src: "src/",
    build: "build/"
  },
  config: {
    tasks: require("./gulp/config/tasks.js")
  },
  gulp: require("gulp"),
  fs: require("fs"),
  del: require("del"),
  path: require('path'),
  plugins: require("gulp-load-plugins")(),
  browserSync: require("browser-sync").create(),
};

$.config.tasks.forEach((taskPath) => {
  require(taskPath)()
});

$.gulp.task("build", $.gulp.series(
  "clean",
  $.gulp.parallel("css", "js", "images", "fonts"),
  "html"
));

$.gulp.task("default", $.gulp.series(
  'build',
  $.gulp.parallel("watch", "serve")
));
