# Sport Obermeyer Drupal 8 theme

A custom Drupal 8 theme developed from scratch based on the Drupal core *stable*
theme, and adopting modern front-end development best practices including:

*   Npm manages front-end packages & dependencies.
*   Grunt watches for front-end code changes and runs build tasks.
*   Sass (with `scss` syntax) for pre-css processing.
*   Sass partial structure roughly follows the
    [7-1 Pattern](https://sass-guidelin.es/#the-7-1-pattern).
*   Autoprefixer for post-css processing adds vendor prefixes for cross-browser
    compatibility.
*   SCSS and JS linting ensures code quality.
*   SVG minification with grunt-svgmin.
*   Theme breakpoints defined in `*.breakpoints.yml` are exposed to sass via
    [Drupal-SASS-Breakpoints](http://bit.ly/drupal-sass-breakpoints).


## Installation

1.  Ensure NPM, Ruby and Ruby Gems are installed on your system.

2.  Run `npm install`.

3.  Run `gem install scss_lint`.

4.  Run `npm install -g grunt-cli` to use `grunt` on the command line.


## Development Process

1.  During development, leave Grunt running in a terminal window to monitor for
    code changes and run tasks accordingly.

        $ grunt

2.  Be careful with scss-lint errors in the console which can prevent your SASS
    code from being compiled to CSS.  Ideally, configure your code editor to
    warn or automatically de-lint SCSS files for you to increase flow.

3.  Save SVG files in the `images/` folder and minify them using:

        $ grunt svgmin

    There is no need to write PNG fallbacks unless required by the supported
    browsers list for this project.



## Updating Autoprefixer database

    $ npm update caniuse-db
