/**
 * @file: fis-conf.js
 * @author 99874405@qq.com
 */

// 按需加载
fis.set('project.files', ['*.html', '/mock/**'])

// 采用 node_modules 依赖
fis.hook('node_modules').unhook('components')

// 采用 commonjs 模块化方案
fis.hook('commonjs', {
    baseUrl: '/src/',
    extList: ['.js', '.es6', '.jsx']
})

// 压缩 html
fis.match('*.html', {
    optimizer : fis.plugin("htmlminify")
})

// 压缩 html:js
fis.match('*.html:js', {
    optimizer: fis.plugin('uglify-js')
})

// 开启模块化
fis.match('/{src,node_modules}/**.{js,es6,jsx}', {
    isMod: true,
    moduleId: function () {
        return fis.util.md5(arguments[1])
    }
})

// 开启 babel
fis.match('/src/**.{es6,jsx}', {
    rExt: 'js',
    parser: fis.plugin('babel-5.x', {
        optional: ["es7.decorators", "es7.classProperties"],
        sourceMaps: true
    })
})

// 合并 node_modules 依赖
fis.match('/node_modules/**.js', {
    optimizer: fis.plugin('uglify-js'),
    packTo: '/pkg/third.js'
})

// 因为是纯前端项目，依赖不能自动被加载进来，所以这里需要借助一个 loader 来完成
fis.match('::package', {
    postpackager: fis.plugin('loader', {
        useInlineMap: true,
        resourcemapWhitespace: 0
    })
})