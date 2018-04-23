// ----------------------------------------------------------------------------------------------------
// ------ Clean task
// ----------------------------------------------------------------------------------------------------
import del from 'del';

class Clean {

  static cleanDir() {

    return del('dist/');

  }
}

let clean = Clean.cleanDir;

export default clean;

