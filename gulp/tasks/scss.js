import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import cleanCss from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';
import concat from 'gulp-concat';

const sass = gulpSass(dartSass);

export const scss = () => {
    return app.gulp.src(app.path.src.scss, { sourcemaps: true})
    .pipe(sass({
        outputStyle: 'expanded'
    }))
    .pipe(concat('style.css'))
    .pipe(autoprefixer({
        grid: true,
        overrideBrowserslist: ['last 3 versions'],
        cascade: true
    }))
    /* .pipe(app.gulp.dest(app.path.build.css)) */
    .pipe(cleanCss())
    .pipe(rename({
        extname: ".min.css"
    }))
    .pipe(app.gulp.dest(app.path.build.css))
}
