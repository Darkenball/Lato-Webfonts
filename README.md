# Lato Webfonts

*high-quality open-source font family*

![Lato Fonts](docs/lato.png)

## Getting Started
* This project was created for the personal usage but we'll be happy if you'll get it as useful for yours goals. 

## Demo

* You can check the Demo Page on GitHub Pages: [Demo Page](https://bofino.github.io/Lato-Webfonts/demo/)

## Description

The last web font kits for the Lato family was updated to version 2.015.
These fonts come in two flavors:   

* Lato with full character set
* LatoLatin with just the Latin characters

The web font kits include WOFF2, WOFF, EOT and TTF. 

We exclude SVG as a deprecated feature with support being removed from browsers.

Of course you can compile SVG if you need it.

We recommend next SVG Font Tools for this goal:

1. [The Apache™ Batik Project](https://xmlgraphics.apache.org/batik/)

2. [FontForge](http://fontforge.github.io/en-US/)

### Prerequisites

You must have installed:

* [Node.js and NPM](https://nodejs.org/en/download/current/)

*npm is distributed with Node.js which means that when you download Node.js,
 you automatically get npm installed on your computer.*

 * [gulp-cli](https://www.npmjs.com/package/gulp-cli)

 *gulp-cli is Command Line Utility for Gulp. just run in the command line:*

      npm install --global gulp-cli

### Installing

**Fork, clone or download Lato-Webfonts.**

Of course, you can use full web font kits.

* Fonts: dist/fonts

* Font-face stylesheets: uncompressed file dist/fonts.css

**So, if you want to create yours personal web font kits -**

* Open the command line in the project folder and run:

      npm i -D gulp@next gulp-decompress gulp-sass gulp-sourcemaps babel-preset-env babel-register del

Of course, you can just run

      npm i

Well, you installed all dependencies. Now you can run in the command line:

      gulp

You get full web font kit in the folder dist/fonts and two completed css styles 
(minified and non-minified) in the folder dist/css if you want to use font-face method.
Also, you've two Map files for both css in the folder dist/css/maps

### Deployment

Of course, you've a free choice. Not necessary get full web fonts kit if you need some fonts only.
That's very simple.

* Open the file booster/paths.js in yours preffered text editor and comment on unnecessary fonts.
For example:

        `${ srcPath }/fonts/Lato-Black.zip`,
        // `${ srcPath }/fonts/Lato-BlackItalic.zip`,
        // `${ srcPath }/fonts/Lato-Bold.zip`,
        // `${ srcPath }/fonts/Lato-BoldItalic.zip`,
        // `${ srcPath }/fonts/Lato-Hairline.zip`,
        // `${ srcPath }/fonts/Lato-HairlineItalic.zip`

* Now open the file source/styles/core/fonts.scss and repeat last action. For example:

        @import 'fonts/Lato-Black';
        // @import 'fonts/Lato-BlackItalic';
        // @import 'fonts/Lato-Bold';
        // @import 'fonts/Lato-BoldItalic';
        // @import 'fonts/Lato-Hairline';
        // @import 'fonts/Lato-HairlineItalic';

So, you comment on all fonts. Just Lato-Black is uncomment. Now run in the command line

      gulp

Done. You got Lato-Black only and font-face css style for Lato-Black only.

### Built With

[Gulp](https://gulpjs.com/)

[Lato fonts](http://www.latofonts.com/lato-free-fonts/)

### Authors

* [Bofino](https://github.com/Bofino)

### License

* This project is licensed under the MIT License - see the [LICENSE](https://github.com/Bofino/Lato-Webfonts/blob/master/LICENSE) file for details

* Lato Font Software is licensed under the [SIL Open Font License](http://scripts.sil.org/OFL)

### Notes

* File .gitignore is created for Windows 10 and Sublime Text. You must modify this file if you use other tools.

