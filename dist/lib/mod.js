/**
 * file: mod.js
 * ver: 1.0.7
 * update: 2014/4/14
 *
 * https://github.com/zjcqoo/mod
 */
var require, define;

(function (global) {
    var factoryMap = {},
        modulesMap = {};

    define = function (id, deps, factory) {
        //console.log('define:', id);
        if (factory === undefined) {
            factory = deps;
        }
        factoryMap[id] = factory;
    };

    require = function (id) {
        id = require.alias(id);

        var mod = modulesMap[id];
        if (mod) {
            return mod.exports;
        }

        //
        // init module
        //
        var factory = factoryMap[id];
        if (!factory) {
            throw '[ModJS] Cannot find module `' + id + '`';
        }

        mod = modulesMap[id] = {
            exports: {}
        };

        //
        // factory: function OR value
        //
        var ret = (typeof factory == 'function')
            ? factory.apply(mod, [require, mod.exports, mod])
            : factory;

        if (ret) {
            mod.exports = ret;
        }
        return mod.exports;
    };

    require.alias = function (id) {
        return id;
    }; // {return aliasMap[id] || id};
})(this);
