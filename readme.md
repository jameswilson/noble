# Sport Obermeyer Drupal 8 theme

A custom Drupal 8 theme developed from scratch based on the Drupal core *stable*
theme, and adopting modern front-end development best practices including:

* Npm manages front-end packages & dependencies.
* Grunt watches for front-end code changes and runs build tasks.
* Sass (with `scss` syntax) for pre-css processing.
* Sass partial structure roughly follows the
  [7-1 Pattern](https://sass-guidelin.es/#the-7-1-pattern).
* Autoprefixer for post-css processing.
* SCSS and JS Linting

Things to come:
* SVG minification
* Automated PNG fallback images created from original SVGs.

## Installation

1. Ensure NPM, Ruby and Ruby Gems are installed on your system.

2. Run `npm install`.

3. Run `gem install scss_lint`.

4. Run `npm install -g grunt-cli` to use `grunt` on the command line.


## Development Process

1. During development, leave Grunt running in a terminal window to monitor for
  code changes and run tasks accordingly.

    $ grunt


## Updating Autoprefixer database

    $ npm update caniuse-db
