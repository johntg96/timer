var gulp = require('gulp');
var sass= require('gulp-sass');
var browserSync = require('browser-sync').create();
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');

gulp.task('default', ['browserSync', 'sass'], function() {

	gulp.watch('app/scss/**/*.scss', ['sass']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);

});

gulp.task('browserSync', function() {

	browserSync.init({
		server: {
			baseDir: 'app'
		}
	})
})

gulp.task('sass', function() {

 	return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss
    	.pipe(sass())
    	.pipe(gulp.dest('app/css'))
    	.pipe(browserSync.stream())
});

gulp.task('images', function() {

	return gulp.src('app/images/**/*.+(png|jpg|gif|svg')

	.pipe(cache(imagemin({
		interlaced: true
	})))
	.pipe(gulp.dest('dist/images'))
});
