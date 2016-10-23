var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var tslint = require('gulp-tslint');
var tsc = require('gulp-typescript').createProject('./tsconfig.json', {
    typescript: require('typescript')
});

gulp.task('ts:lint', function () {
	return gulp.src('src/**/*.ts')
		.pipe(tslint({ formatter: 'verbose' }))
		.pipe(tslint.report());
});

gulp.task('ts:build', ['ts:lint'], function () {
	return tsc.src()
		.pipe(sourcemaps.init())
		.pipe(tsc())
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./lib'));
});

gulp.task('ts', ['ts:lint', 'ts:build']);

gulp.task('html', function () {
	return gulp.src('src/**/*.html')
		.pipe(gulp.dest('./lib'));
});

gulp.task('sass', function () {
	return gulp.src('src/**/*.scss')
		.pipe(gulp.dest('./lib'));
});

gulp.task('build', ['ts', 'html', 'sass']);