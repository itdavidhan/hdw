//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'), //本地安装gulp所用到的地方
    pug = require('gulp-pug'),
    less = require('gulp-less');
 
//定义一个testPug任务 
gulp.task('testPug', function buildHTML() {
  return gulp.src('./pug/*.pug')
  .pipe(pug({
        pretty: true
  }))
  .pipe(gulp.dest('./html')); 
});

gulp.task('testLess', function () {
    gulp.src('./less/*.less')
        .pipe(less())
        .pipe(gulp.dest('./css'));
});

// 监听pug
gulp.task('watchPug', function() {
    gulp.watch('./pug/**/*.pug', ['testPug']);
});

// 监听less
gulp.task('watchLess', function() {
    gulp.watch('./less/**/*.less', ['testLess']);
});
 
gulp.task('default', ['testPug', 'watchPug', 'watchLess']); 
 
//gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组) 
//gulp.dest(path[, options]) 处理完后文件生成路径