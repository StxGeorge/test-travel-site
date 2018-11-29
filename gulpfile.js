//import gulp from 'gulp'; this is in ES6
var gulp = require('gulp'), watch = require('gulp-watch');

gulp.task('default', function() {
    console.log("You did it mate!");
});

gulp.task('html', function(){
    console.log("imagine something useful being done to your HTML");
});

gulp.task('styles', function(){
    console.log("imagine Sass or PostCSS running here");
});

gulp.task('watch', function() {

    watch('./app/index.html', function() {
        gulp.start('html');
    });

    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('styles');
    });
});