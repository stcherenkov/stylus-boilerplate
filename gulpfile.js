var gulp = require('gulp'),
    stylus = require('gulp-stylus');

gulp.task('basic', function () {
    gulp.src('./lib/_base/_base.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./css/'));
});

gulp.task('fonts', function () {
    gulp.src('./lib/fonts/fonts.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./css/'));
});

gulp.task('default', ['basic']);