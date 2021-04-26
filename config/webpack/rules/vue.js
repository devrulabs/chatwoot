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
      {
        test: /(.jpg|.jpeg|.png|.gif|.tiff|.ico|.svg|.eot|.otf|.ttf|.woff|.woff2)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              context: 'app/javascript',
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
        sideEffects: true,
        exclude: /\.module\.[a-z]+$/,
      },
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader'],
        sideEffects: true,
        exclude: /\.module\.[a-z]+$/,
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
};
