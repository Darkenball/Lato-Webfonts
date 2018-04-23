// ----------------------------------------------------------------------------------------------------
// ------ Gulp file
// ----------------------------------------------------------------------------------------------------
import gulp from 'gulp';

import clean from './booster/taskClean';     // Remove destination folder
import fonts from './booster/taskFonts';     // Unzip necessary fonts
import style from './booster/taskStyle';     // Creates a font-face stylesheet for selected fonts

let webfonts = gulp.series(clean, gulp.parallel(fonts, style));

export default webfonts;                     // Now you can run just <gulp> in the command line
