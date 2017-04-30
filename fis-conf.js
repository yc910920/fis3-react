/**
 * @file: fis-conf.js
 * @author 99874405@qq.com
 */

// 按需加载
fis.set('project.files', ['*.html'])

// 采用 commonjs 模块化方案
fis.hook('commonjs', { tab: 4, baseUrl: '/src/', extList: ['.js', '.es6', '.jsx'] })

// 开启模块化
fis.match('/{src,node_modules}/**.{js,es6,jsx}', { isMod: true })

// 开启 babel
fis.match('/src/**.{es6,jsx}', {
    parser: fis.plugin('babel-6.x')
})