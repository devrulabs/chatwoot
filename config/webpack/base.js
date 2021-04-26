const { webpackConfig, merge } = require('@rails/webpacker');
const customConfig = require('./loaders/static');
const vueConfig = require('./loaders/vue');
const audioConfig = require('./loaders/audio');

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
