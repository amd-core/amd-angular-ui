const gulp = require('gulp');
const exec = require('npm-run');
const clean = require('gulp-clean');
const rollup = require('rollup');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const path = require('path');
const angularInline = require('@amd-core/gulp-angular-inline');
const ngc = require('@angular/tsc-wrapped').main;
const tslint = require('gulp-tslint');
const rename = require('gulp-rename');
const stripComments = require('gulp-strip-comments');

const packageDir = path.resolve('packages');
const srcDir = path.resolve(packageDir, 'ui-components');
const srcCompDir = path.resolve(srcDir, 'components');

const baseDistDir = path.resolve('dist');
const distDir = path.resolve(baseDistDir, 'amd-angular-ui');

const themesDir = path.resolve(distDir, 'themes');
const bundlesDir = path.resolve(distDir, 'bundles');
const typesDir = path.resolve(distDir, 'typings');

const tmpDir = path.resolve(baseDistDir, 'tmp');

const es5Dist = path.resolve(tmpDir, 'es5');
const es6Dist = path.resolve(tmpDir, 'es6');

const sassOptions = {
  outputStyle: 'expanded' 
};

const LICENSE_BANNER =
`/**
  * @license AMD Core Angular UI
  * Copyright 2017 AMD Core
  * License: MIT
  */
`;

const ROLLUP_GLOBALS = require('./config/rollup-globals.json');

function createRollupBundle(config) {
  return rollup.rollup({
    context: 'this',
    external: Object.keys(ROLLUP_GLOBALS),
    plugins: config.plugins,
    input: config.input
  })
  .then((bundle) => {
    bundle.write({
      name: 'amd.angular-ui',
      banner: LICENSE_BANNER,
      format: config.format,
      file: config.file,
      globals: ROLLUP_GLOBALS,
      sourcemap: true
    })
  });
}

gulp.task('clean:pre', () => {
  return gulp.src(baseDistDir, { read: false }).pipe(clean());
});

/**
 * Lint Tasks
 */

gulp.task('lint:ts', () => {
  return gulp.src(path.resolve(srcCompDir, '**/*.ts'))
    .pipe(tslint({ formatter: 'verbose' }))
    .pipe(tslint.report()) 
});

gulp.task('lint', ['lint:ts']);

/**
 * SASS Tasks
 */

gulp.task('sass:reset', ['clean:pre'], () => {
  return gulp.src(path.resolve(packageDir, 'reset-ui-theme', 'index.scss'))
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(stripComments.text())
    .pipe(rename('reset-ui-theme.css'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(themesDir));
});

gulp.task('sass:base', ['clean:pre'], () => {
  return gulp.src(path.resolve(packageDir, 'base-ui-theme', 'index.scss'))
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(stripComments.text())
    .pipe(rename('base-ui-theme.css'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(themesDir));
});

gulp.task('sass', ['sass:reset', 'sass:base']);

/**
 * Theme Tasks
 */

gulp.task('theme:base', ['clean:pre'], () => {
  return gulp.src(path.resolve(packageDir, 'base-ui-theme', '**/*.scss'))
    .pipe(gulp.dest(path.resolve(distDir, 'base-ui-theme')));
});

gulp.task('theme', ['theme:base']);

/**
 * Copy Tasks
 */

gulp.task('copy', ['clean:pre'], () => {
  return gulp.src([
    path.resolve(srcDir, 'package.json'),
    path.resolve(srcDir, 'README.md')
  ]).pipe(gulp.dest(distDir));
});

/**
 * HTML Tasks
 */

gulp.task('html:es5', ['clean:pre'], () => {
  return gulp.src(path.resolve(srcCompDir, '**/*.html'))
    .pipe(gulp.dest(es5Dist));
});

gulp.task('html:es6', ['clean:pre'], () => {
  return gulp.src(path.resolve(srcCompDir, '**/*.html'))
    .pipe(gulp.dest(es6Dist));
});

gulp.task('html', ['html:es5', 'html:es6']);

/**
 * Angular Compiler Tasks
 */

gulp.task('ngc:es5', ['clean:pre'], () => {
  return ngc(path.resolve(srcDir, 'tsconfig.es5.json'), { basePath: srcDir });
});

gulp.task('ngc:es6', ['clean:pre'], () => {
  return ngc(path.resolve(srcDir, 'tsconfig.es6.json'), { basePath: srcDir });
});

gulp.task('ngc', ['ngc:es5', 'ngc:es6']);

/**
 * Inline Tasks
 */

gulp.task('inline:es5', ['html:es5', 'ngc:es5'], () => {
  return gulp.src(path.resolve(es5Dist, '**/*.js'))
    .pipe(sourcemaps.init())
    .pipe(angularInline({ basePath: es5Dist }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(es5Dist));
});

gulp.task('inline:es6', ['html:es6', 'ngc:es6'], () => {
  return gulp.src(path.resolve(es6Dist, '**/*.js'))
    .pipe(sourcemaps.init())
    .pipe(angularInline({ basePath: es6Dist }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(es6Dist));
});

gulp.task('inline', ['inline:es5', 'inline:es6']);

/**
 * Metadata Tasks
 */

gulp.task('metadata:typings', ['ngc:es6'], () => {
  return gulp.src(path.resolve(es6Dist, '**/*.d.ts'))
    .pipe(gulp.dest(typesDir));
});

gulp.task('metadata:ngc', ['ngc:es6', 'html:es6'], () => {
  return gulp.src(path.resolve(es6Dist, '**/*.metadata.json'))
    .pipe(angularInline({ basePath: es6Dist }))
    .pipe(gulp.dest(typesDir));
});

gulp.task('metadata', ['metadata:typings', 'metadata:ngc']);

/**
 * Bundle Tasks
 */

gulp.task('bundle:main', ['html:es5', 'ngc:es5', 'inline:es5'], () => {
  return createRollupBundle({
    input: path.resolve(es5Dist, 'angular-ui.js'),
    file: path.resolve(bundlesDir, 'angular-ui.umd.js'),
    format: 'umd'
  });
});

gulp.task('bundle:es5', ['html:es5', 'ngc:es5', 'inline:es5'], () => {
  return createRollupBundle({
    input: path.resolve(es5Dist, 'angular-ui.js'),
    file: path.resolve(bundlesDir, 'angular-ui.es5.js'),
    format: 'es'
  });
});

gulp.task('bundle:es6', ['html:es6', 'ngc:es6', 'inline:es6'], () => {
  return createRollupBundle({
    input: path.resolve(es6Dist, 'angular-ui.js'),
    file: path.resolve(bundlesDir, 'angular-ui.es6.js'),
    format: 'es'
  });
});

gulp.task('bundle', ['bundle:main', 'bundle:es5', 'bundle:es6']);

gulp.task('clean:post', ['inline', 'metadata', 'bundle'], () => {
  return gulp.src(tmpDir, { read: false }).pipe(clean());
});

gulp.task('default', [
  'clean:pre', 'copy', 'sass', 'theme',
  'ngc', 'inline', 'metadata',
  'bundle', 'clean:post'
]);
