import gulp from 'gulp'
import config from './gulp/config'
import clean from './gulp/tasks/clean'
import server from './gulp/tasks/server'
import { scriptsBuild, scriptsWatch } from './gulp/tasks/scripts'
import { htmlBuild, htmlWatch } from './gulp/tasks/html'
import { stylesBuild, stylesWatch } from './gulp/tasks/styles'
import { assetsBuild, assetsWatch } from './gulp/tasks/assets'
import { imagesBuild, imagesWatch } from './gulp/tasks/images'
import { spritesBuild, spritesWatch } from './gulp/tasks/sprites'
import { fontsBuild, fontsWatch } from './gulp/tasks/fonts'

config.setEnv()

export const build = gulp.series(
    clean,
    gulp.parallel(
        scriptsBuild,
        htmlBuild,
        stylesBuild,
        assetsBuild,
        imagesBuild,
        fontsBuild,
        spritesBuild
    )
)

export const watch = gulp.series(
    build,
    server,
    gulp.parallel(
        scriptsWatch,
        htmlWatch,
        stylesWatch,
        assetsWatch,
        imagesWatch,
        fontsWatch,
        spritesWatch
    )
)
