let gulp = require('gulp');
let clean = require('gulp-clean');
let minifyCSS = require('gulp-clean-css');
let uglify = require('gulp-uglify-es').default;
let htmlmin = require('gulp-htmlmin');
let autoprefixer = require('gulp-autoprefixer');
let merge = require('merge-stream');

// Location to our files
let globs = {
  build: './build',
  css: './src/css/**/*.css',
  js: './src/js/**/*.js',
  html: './src/*.html',
  images: './src/assets/**',
  seoFiles: ['./src/manifest.json', './src/robots.txt']
};


// First clean the build folder, it will delete it and recreate it
gulp.task('clean', gulp.series(function() {
  return gulp.src(globs.build, {read: false})
    .pipe(clean());
}));


// Move images to /build folder
// Move seoFiles to /build folder
// You can also perform scaling and compression on images
gulp.task('assets', gulp.series('clean', function() {
  let images = gulp.src(globs.images).pipe(gulp.dest(globs.build + '/assets'));
  let seoFiles = gulp.src(globs.seoFiles).pipe(gulp.dest(globs.build + '/'));

  return merge(images);
}));


// Take all CSS in /css folder -> Add auto prefixer to them
// Then Minify and export to /build folder
gulp.task('styles', gulp.series('clean', function() {
  return gulp.src(globs.css)
    .pipe(autoprefixer())
    .pipe(minifyCSS())
    .pipe(gulp.dest(globs.build + '/css'));
}));


// Take all JS in /js folder
// Then Minify and export to /build folder
gulp.task('js', gulp.series('clean', function() {
  return gulp.src(globs.js)
    .pipe(uglify())
    .pipe(gulp.dest(globs.build + '/js'));
}));


// Take the HTML file, minify it with params below
gulp.task('html', gulp.series('clean', function() {
  return gulp.src(globs.html)
  .pipe(htmlmin({
    collapseWhitespace: true,
    removeComments: true
  }))
  .pipe(gulp.dest('./build'));
}));


// Build the task
gulp.task('build', gulp.parallel('assets', 'styles', 'js', 'html'));

gulp.task('default', gulp.series('build'));