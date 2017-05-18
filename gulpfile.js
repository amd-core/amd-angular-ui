const gulp = require('gulp');
const exec = require('npm-run');
const clean = require('gulp-clean');
const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const inlineAssets = require('gulp-inline-ng2-template');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const path = require('path');
const angularInline = require('@amd-core/gulp-angular-inline');
const tsc = require('@angular/tsc-wrapped').main;

const packageDir = path.resolve('packages');
const srcDir = path.resolve(packageDir, 'ui-components');

const distDir = path.resolve('dist', 'amd-angular-ui');
const tmpDir = path.resolve(distDir, 'tmp');
const typeDir = path.resolve(distDir, 'typings');
const bundleDir = path.resolve(distDir, 'bundles');

const LICENSE_BANNER =
`/**
  * @license AMD Core Angular UI
  * Copyright 2017 AMD Core
  * License: MIT
  */
`;

const ROLLUP_GLOBALS = require('./config/rollup-globals.json');

function createRollupBundle(config) {
  let bundleOptions = {
    context: 'this',
    external: Object.keys(ROLLUP_GLOBALS),
    entry: path.resolve(typeDir, 'entry.js'),
    plugins: config.plugins
  };

  let writeOptions = {
    moduleName: 'amd.angular-ui',
    banner: LICENSE_BANNER,
    format: config.format,
    dest: config.dest,
    globals: ROLLUP_GLOBALS,
    sourceMap: true
  };

  return rollup.rollup(bundleOptions)
    .then((bundle) => bundle.write(writeOptions));
}

function createES6Bundle () {
  return createRollupBundle({
    dest: path.resolve(bundleDir, 'amd-angular-ui.js'),
    format: 'es'
  });
}

function createES5Bundle () {
  return createRollupBundle({
    dest: path.resolve(bundleDir, 'amd-angular-ui.es5.js'),
    format: 'es',
    plugins: [
      babel()
    ]
  });
}

function createUMDBundle () {
  return createRollupBundle({
    dest: path.resolve(bundleDir, 'amd-angular-ui.umd.js'),
    format: 'umd',
    plugins: [
      babel()
    ]
  });
}

gulp.task('clean:pre', () => {
  return gulp.src(distDir, { read: false }).pipe(clean());
});

gulp.task('copy:html', ['clean:pre'], () => {
  return gulp.src(path.resolve(srcDir, 'components', '**/*.html'))
    .pipe(gulp.dest(tmpDir));
});

gulp.task('copy:root', ['clean:pre'], () => {
  return gulp.src([
    path.resolve(srcDir, 'package.json'),
    path.resolve(srcDir, 'README.md')
  ]).pipe(gulp.dest(distDir));
});

gulp.task('copy', ['copy:html', 'copy:root']);

gulp.task('sass:reset', ['clean:pre'], () => {
  return gulp.src(path.resolve(packageDir, 'reset-ui-theme', '**/*.scss'))
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('reset-ui-theme.css'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(path.resolve(distDir, 'bundles')));
});

gulp.task('sass:base', ['clean:pre'], () => {
  return gulp.src(path.resolve(packageDir, 'base-ui-theme', '**/*.scss'))
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('base-ui-theme.css'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(path.resolve(distDir, 'bundles')));
});

gulp.task('sass', ['sass:reset', 'sass:base']);

gulp.task('ngc', ['clean:pre'], () => {
  return tsc(path.resolve(srcDir, 'tsconfig.json'), {basePath: srcDir});
});

gulp.task('inline', ['ngc'], () => {
  return gulp.src(path.resolve(tmpDir, '**/*.js'))
    .pipe(sourcemaps.init())
    .pipe(angularInline({
      basePath: srcDir
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(typeDir));
});

gulp.task('metadata', ['ngc', 'copy:html'], () => {
  return gulp.src(path.resolve(typeDir, '**/*.metadata.json'))
    .pipe(angularInline({
      basePath: tmpDir
    }))
    .pipe(gulp.dest(typeDir));
});

gulp.task('bundle', ['inline'], (done) => {
  createES6Bundle()
    .then(createES5Bundle())
    .then(createUMDBundle());
});

gulp.task('clean:post', ['inline', 'metadata', 'bundle'], () => {
  return gulp.src([
    tmpDir,
    path.resolve(typeDir, '**/*.js'),
    path.resolve(typeDir, '**/*.js.map')
  ], { read: false }).pipe(clean());
});

gulp.task('default', [
  'clean:pre', 'copy', 'sass',
  'ngc', 'inline', 'metadata',
  'bundle', 'clean:post'
]);
