// include gulp and all plugins
var gulp         = require('gulp'),
    pixrem       = require('gulp-pixrem');

gulp.task('css', function(){

    return gulp.src('./src/index.css')
        .pipe(pixrem('100%')) 
        .pipe(gulp.dest('./build/'));
});
 

// create watch task
gulp.task('watch', function(){
    gulp.watch('./src/index.css', ['css']);
}); 


// default task (run when you run 'gulp')
gulp.task('default', ['css', 'watch']);

