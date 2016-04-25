(function () {

'use strict';

module.exports = function(grunt) {

  // Shorthand for loading all grunt tasks.
  require('load-grunt-tasks')(grunt);

  // See http://bit.ly/drupal-sass-breakpoints
  var eyeglass = require('eyeglass');

  grunt.initConfig({

    // Watch for changes to SCSS files to pre- and post- process CSS.
    watch: {
      sass: {
        files: ['scss/{,**/}*.scss', 'Gruntfile.js', '*.yml', '.scss-lint.yml'],
        tasks: ['scsslint:dist', 'sass:dist', 'autoprefixer:dist']
      },
      js: {
        files: ['js/{,**/}*.js', '!js/{,**/}*.min.js'],
        tasks: ['jshint']
      },
    },

    // We write our styles in SCSS and let grunt compile down to CSS.
    sass: {
      options: eyeglass({
        outputStyle: 'expanded'
      }),
      dist: {
        expand: true,
        flatten: true,
        src: 'scss/{,**/}*.scss',
        dest: 'css/',
        ext: '.css'
      },
    },

    // Lint SCSS files.
    scsslint: {
      options: {
        config: '.scss-lint.yml',
        colorizeOutput: true
      },
      dist: ['scss/{,**/}*.scss'],
    },

    // Autoprefixer post-processes the generated CSS files.
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9']
      },
      dist: {
        expand: true,
        flatten: true,
        src: 'css/**/*.css',
        dest: 'css/'
      },
    },

    // Lint all javascript files.
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      dist: ['js/{,**/}*.js']
    },

    // Minify all SVG files in "images" folder.
    svgmin: {
      options: {
        plugins: [
          {
            removeViewBox: false
          }, {
            removeUselessStrokeAndFill: false
          }
        ]
      },
      dist: {
        expand: true,
        flatten: true,
        src: 'images/**/*.svg',
        dest: 'images/'
      },
    },

  });

  // Running `grunt` in the cli will automatically execute the following tasks:
  grunt.registerTask('default', ['sass:dist', 'autoprefixer:dist', 'watch']);
};

}());
