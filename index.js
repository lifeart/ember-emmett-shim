/* jshint node: true */
'use strict';
var fs = require('fs');
module.exports = {
  name: 'emmett',
  included(app, parentAddon) {
    var target = (parentAddon || app);
    target.options = target.options || {};
    target.options.babel = target.options.babel || { includePolyfill: true };
    this._super.included.apply(this, arguments);
    target.import('node_modules/emmett/emmett.js');
    target.import('vendor/shims/emmett.js');
  }
};