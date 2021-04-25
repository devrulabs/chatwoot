const { webpackConfig, merge } = require('@rails/webpacker');
const fs = require('fs');
const customConfig = require('./custom');
const vueConfig = require('./rules/vue');
const audioConfig = require('./rules/audio');

delete webpackConfig.module.rules;
const xx = merge(webpackConfig, vueConfig);
console.log(xx.module.rules);

try {
  fs.writeFileSync('./webpack.json', JSON.stringify(xx));
} catch (err) {
  console.error(err);
}

module.exports = xx;
