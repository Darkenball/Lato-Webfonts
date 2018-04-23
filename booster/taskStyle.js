// ----------------------------------------------------------------------------------------------------
// ------ Styles task
// ----------------------------------------------------------------------------------------------------
import gulp from 'gulp';
import sass from 'gulp-sass';

class Style {

  static createCss() {

   return gulp.src('source/scss/fonts.scss')
            .pipe(sass())
            .pipe(gulp.dest('dist/'));
  }
}

let style = Style.createCss;

export default style;
