const gulp = require('gulp'); // 載入 gulp
const less = require('gulp-less');
const path = require('path');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename'); // rename files
const del = require('del');


function clean() {
  return del('./build/*');
}

function style() {
  return gulp.src('./app/**/*.less')
    .pipe(less({
        paths: [path.join(__dirname, 'less', 'includes')],
    }))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(rename({
      basename: 'main',
      suffix: 'min',
    }))
    .pipe(gulp.dest('./build/css'));
}
function script() {
  return gulp.src('./app/**/*.js')
    .pipe(babel({
      presets: ['@babel/env'],
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'));
}


function watch() {
  gulp.watch('./app/js/*.js', script);
  gulp.watch('./app/css/*.less', style);
}

exports.clean = clean;
exports.style = style;
exports.script = script;
exports.watch = watch;
exports.default = gulp.series(clean, style, script, watch);
