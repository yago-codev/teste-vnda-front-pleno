const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const sass = require('gulp-sass')
const rename = require('gulp-rename')
const browserSync = require('browser-sync').create()
const reload = browserSync.reload
const htmlmin = require('gulp-htmlmin');
const del = require('del')

function compilaSass() {
  return gulp
    .src('src/scss/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('dist/css'))
}

function watch() {
  gulp.watch('src/scss/**/*.scss', compilaSass)
}

gulp.task('serve', function () {
  browserSync.init({
      server: {
          baseDir: './'
      }
  });
  gulp.watch('*.html').on('change', reload)
});

gulp.task('build-img' , () => {
  return gulp
  .src('./src/images/**/*')
  .pipe(imagemin())
  .pipe(gulp.dest('./dist/images'))
})

gulp.task('pages', function() {
  return gulp.src(['./**/*.html'])
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest('./dist'))
})

gulp.task('clean', () => del(['dist']))

gulp.task('default', watch, compilaSass)