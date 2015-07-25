var fs = require('fs');

fis.config.merge({
    modules: {
        parser: {
            scss: 'sass',
            tpl: 'imweb-tpl'
        },
        postprocessor: {
            js: "jswrapper, require-async",
            html: "require-async",
            tpl: "jswrapper"
        },
        prepackager: ['csswrapper'],
        postpackager: ['my-components-build']
    },
    roadmap: {
        ext: {
            scss: 'css',
            tpl: 'js',
            ascss: 'js',
            acss: 'js'
        },
        path: [
            {
                reg: '**.inline.js',
                isMod: false
            }, {
                reg: '/lib/zepto.js',
                isMod: true,
                id: 'zepto'
            }, {
                //一级同名组件，可以引用短路径，比如modules/jquery/juqery.js
                //直接引用为var $ = require('jquery');
                reg: /^\/components\/((?:[^\/]+\/)*)([^\/]+)\/\2\.(js)$/i,
                //是组件化的，会被jswrapper包装
                isMod: true,
                //id为文件夹名
                id: '$1$2'
            }, {
                reg: /^\/components\/(.*)\.(scss)$/i,
                id: '$1.$2'
            }, {
                //components目录下的其他脚本文件
                reg: /^\/components\/(.*)\.(js)$/i,
                //是组件化的，会被jswrapper包装
                isMod: true,
                //id是去掉components和.js后缀中间的部分
                id: '$1'
            }, {
                //modules目录下的其他脚本文件
                reg: /^\/components\/(.*)\.(tpl)$/i,
                //是组件化的，会被jswrapper包装
                isMod: true,
                //id是去掉modules和.js后缀中间的部分
                id: '$1.tpl',
                release: '$0.js'
            }, {
                reg: /^\/components\/[^/]*\/test-conf\.json$/i,
                release: false
            }
        ]
    },
    settings: {
        postprocessor: {
            jswrapper: {
                type: 'amd'
            }
        }
    },
    deploy: {
        dev: {
            to: '../dev'
        },
        dist: {
            to: '../dist'
        },
        pack: []
    }
});