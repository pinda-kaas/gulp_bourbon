var gulp=require('gulp');

gulp.task('hello', function() {
    console.log('Hi there');
});

var sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('app/scss/styles.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('app/css'))
});