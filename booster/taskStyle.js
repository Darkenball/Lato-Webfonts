// ----------------------------------------------------------------------------------------------------
// ------ Styles task
// ----------------------------------------------------------------------------------------------------
import gulp from 'gulp';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';

class Style {

  static createCss() {

   return gulp.src('source/scss/fonts.scss')
            .pipe(sourcemaps.init())
            .pipe(sass())
            .pipe(sourcemaps.write('./maps', {includeContent: false}))
            .pipe(gulp.dest('dist/'));
  }
}

let style = Style.createCss;

export default style;
