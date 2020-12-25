var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
sass.compiler = require('node-sass');


gulp.task('sass', () => {
  return gulp
    .src("./scss/**/*.scss")
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest("./"))
});

gulp.task("sass:watch", () => {
  gulp.watch("./scss/**/*.scss", gulp.series('sass'));
});


gulp.task('default', gulp.series('sass:watch'));
