var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	less = require('gulp-less'),
	LessPluginCleanCSS = require('less-plugin-clean-css'),
	cleancss = new LessPluginCleanCSS({ advanced:true });

gulp.task('scripts', function() {
	gulp.src('app/res/js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('app/res/minjs'));
});

gulp.task('styles', function() {
	gulp.src('app/res/less/**/*.less')
		.pipe(less({
			plugins: [cleancss]
		}))
		.pipe(gulp.dest('app/res/css'));
});

gulp.task('watch', function() {
	gulp.watch('app/res/js/*.js', ['scripts']);
	gulp.watch('app/res/less/**/*.less', ['styles']);
});

gulp.task('default', ['watch', 'styles']);