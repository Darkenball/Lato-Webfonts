// ----------------------------------------------------------------------------------------------------
// ------ Fonts task
// ----------------------------------------------------------------------------------------------------
import gulp from 'gulp';
import decompress from 'gulp-decompress';
import paths from './paths';

class Fonts {

  static unzipFonts() {

    return gulp.src(paths.src.fonts)
              .pipe(decompress())
              .pipe(gulp.dest('dist/fonts'));
  }
}

let fonts = Fonts.unzipFonts;

export default fonts;
