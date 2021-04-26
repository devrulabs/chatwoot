const { webpackConfig, merge } = require('@rails/webpacker');
const fs = require('fs');
const customConfig = require('./custom');
const vueConfig = require('./rules/vue');
const audioConfig = require('./rules/audio');

const [
  htmlRule,
  assetRule,
  cssRule,
  scssRule,
  jsRule,
] = webpackConfig.module.rules;
webpackConfig.module.rules = [htmlRule, jsRule];

const finalConfig = merge(vueConfig, audioConfig, customConfig, webpackConfig);

module.exports = finalConfig;
