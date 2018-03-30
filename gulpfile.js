var gulp          = require('gulp'),
		less          = require('gulp-less'),
		browserSync   = require('browser-sync'),
		concat        = require('gulp-concat'),
		uglify        = require('gulp-uglifyjs'),
		cssnano       = require('gulp-cssnano'),
		rename        = require('gulp-rename'),
		del           = require('del'),   
		// imagemin      = require('gulp-imagemin'),
		// pngquant      = require('imagemin-pngquant'),
		autoprefixer  = require('gulp-autoprefixer'),
		cache         = require('gulp-cache'),
		cssImport     = require('gulp-cssimport');




// компиляция less в css
gulp.task('less', function() {
	return gulp.src('app/less/**/*.less')
	.pipe(less())
	.pipe(cssImport())
	.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
	.pipe(gulp.dest('app/css'))
// мгновенное обновление в браузере после сохранения
	.pipe(browserSync.reload({stream:true}))
});






// слияние скриптов в один и минифицирование его
gulp.task('scripts', function(){
	return gulp.src([
		'app/libs/jquery/dist/jquery.js',
		'app/libs/respond/dest/respond.src.js',
		'app/libs/jquery.maskedinput/dist/jquery.maskedinput.js',
		'app/libs/youtubeBackground/src/jquery.youtubebackground.js',
		'app/libs/slick-carousel/slick/slick.js',
		'app/libs/jQuery.equalHeights/jquery.equalheights.js',
		'app/libs/fancybox/dist/jquery.fancybox.js',
		'app/libs/slidebars/dist/slidebars.js',
		])
	.pipe(concat('libs.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/js'));
});




// минифицирование CSS и добавление суффикса ".min"
gulp.task('css-libs', ['less'], function(){
	return gulp.src([
		'app/css/main.css',
		'app/css/vars.css',
		'app/css/fonts.css',
		'app/css/_media.css',
		'app/css/_theme_color.css',
		])
	.pipe(concat('main.css'))
	.pipe(cssnano())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('app/css'));
});




gulp.task('browser-sync', ['clean', 'less', 'scripts'], function(){
	browserSync({
// включение и указание директории сервера
		server: {
			baseDir: 'app'
		},
// отключение оповещений browsercync в браузере
		notify: false
	});
});




gulp.task('clean', function(){
	return del.sync('dist');
});




// ручная очистка кэша картинок
gulp.task('clear', function(){
	return cache.clearAll();
});

// работа с изображениями
gulp.task('img', function(){
	return gulp.src('app/img/**/*')
	// .pipe(cache(imagemin({
	// 	interlaced: true,
	// 	progressive: true,
	// 	svgoPlugins: [{removeViewBox: false}],
	// 	use: [pngquant()]
	// })))
	.pipe(gulp.dest('dist/img'));
});
// после раскомментирования добавить таск в предочередность билда 'build', ['clean', 'img', 'less', 'scripts'] и раскомментить в самом галпе


// слежение за изменениями в файлах
// gulp.task('watch', ['перечисление событий ДО срабатывания WATCH', 'перечисление событий ДО срабатывания WATCH'], function(){
gulp.task('watch', ['browser-sync', 'css-libs', 'scripts'], function(){
	gulp.watch('app/less/**/*.less', ['less']),
	gulp.watch('app/*.html', browserSync.reload),
	gulp.watch('app/less/*.less', browserSync.reload),
	gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('build', ['clean', 'img', 'less', 'scripts', 'css-libs'], function(){

	var buildCss = gulp.src([
			'app/css/main.css',
			'app/css/libs.css',
			'app/css/vars.css',
		])
	.pipe(gulp.dest('dist/css'));

	var buildFonts = gulp.src('app/fonts/**/*')
	.pipe(gulp.dest('dist/fonts'));

	var buildJs = gulp.src('app/js/**/*')
	.pipe(gulp.dest('dist/js'));

	var buildHtml = gulp.src('app/*.html')
	.pipe(gulp.dest('dist'));
});

gulp.task('default', ['browser-sync', 'watch']);