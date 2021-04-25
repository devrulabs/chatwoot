const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  module: {
    rules: [
      { test: /\.vue$/, loader: 'vue-loader' },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
};
