"use strict";

var zhCN=require("./zh-CN");

(function () {
    var root = this;

    var language={
          
    }
    /*export language to window or server */
    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = language;
        }
        exports.language = language;
    } else if (typeof define === 'function' && define.amd) {
        // Register as a named module with AMD.
        define(function () {
            return language;
        });
    } else {
        root['language'] = language;
    }
}).call(this);